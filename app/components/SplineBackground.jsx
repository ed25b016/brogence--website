"use client";

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div id="spline-fallback" className="fallback-pulse" />,
});

// Store initial positions OUTSIDE the component so HMR/re-renders don't stack offsets
let _initPositions = null;
let _initRotY = null;
let _initScale = null;

export default function SplineBackground() {
  const [loaded, setLoaded] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(true);
  
  const rafRef = useRef(null);
  const scrollListenerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const isLowEnd = navigator.hardwareConcurrency <= 2;
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');

    if (isMobile || isLowEnd || !gl) {
      setShouldLoad(false);
    }
    
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (scrollListenerRef.current) {
        window.removeEventListener('scroll', scrollListenerRef.current);
        scrollListenerRef.current = null;
      }
    };
  }, []);

  function handleLoad(splineApp) {
    setLoaded(true);

    // Suppress Spline internal warnings
    const _origErr = console.error;
    console.error = function(...args) {
      const msg = typeof args[0] === 'string' ? args[0] : '';
      if (msg.includes('Missing property') || msg.includes('buildTimeline')) return;
      return _origErr.apply(console, args);
    };

    // PERF: Cap pixel ratio to 1
    try {
      if (splineApp.setPixelRatio) splineApp.setPixelRatio(1);
      if (splineApp._renderer) splineApp._renderer.setPixelRatio(1);
    } catch (e) {}

    if (!splineApp || typeof splineApp.getAllObjects !== 'function') return;

    let allObjects;
    try { allObjects = splineApp.getAllObjects(); } catch (e) { return; }

    // Find robot
    let robot = null;
    for (const name of ['robot', 'Robot', 'ROBOT', 'main', 'Main', 'Scene', 'Group']) {
      try {
        robot = splineApp.findObjectByName(name);
        if (robot) break;
      } catch (e) {}
    }
    if (!robot) robot = allObjects.find(o => o.type === 'Group') || allObjects[0];
    if (!robot) return;

    // Capture initial transforms ONLY ONCE (survives HMR/re-renders)
    if (_initRotY === null) _initRotY = robot.rotation.y;
    if (_initScale === null) _initScale = { x: robot.scale.x, y: robot.scale.y, z: robot.scale.z };

    // Reset robot to initial state first (in case of HMR re-trigger)
    robot.rotation.y = _initRotY;
    robot.scale.x = _initScale.x;
    robot.scale.y = _initScale.y;
    robot.scale.z = _initScale.z;

    // ── Tuning ──
    const MAX_ROTATION = Math.PI * 1.5;
    const MAX_ZOOM = 1.1;
    const DISMANTLE_SPREAD = 400;

    // Build dismantle parts — capture initial positions ONLY ONCE
    const parts = [];
    const firstTime = (_initPositions === null);
    if (firstTime) _initPositions = new Map();

    allObjects.forEach(obj => {
      if (
        obj.type !== 'DirectionalLight' &&
        obj.type !== 'PointLight' &&
        obj.type !== 'PerspectiveCamera' &&
        obj !== robot &&
        obj.position
      ) {
        // On first load, record true initial position
        if (firstTime) {
          const angle = Math.random() * Math.PI * 2;
          const upDown = (Math.random() - 0.3) * 2;
          _initPositions.set(obj.uuid || obj.name || parts.length, {
            x: obj.position.x,
            y: obj.position.y,
            z: obj.position.z,
            expX: Math.cos(angle) * DISMANTLE_SPREAD * (0.6 + Math.random() * 0.4),
            expY: upDown * DISMANTLE_SPREAD * (0.4 + Math.random() * 0.6),
            expZ: Math.sin(angle) * DISMANTLE_SPREAD * (0.3 + Math.random() * 0.5),
          });
        }

        const key = obj.uuid || obj.name || parts.length;
        const stored = _initPositions.get(key);
        if (stored) {
          // Reset to true initial position
          obj.position.x = stored.x;
          obj.position.y = stored.y;
          obj.position.z = stored.z;

          parts.push({
            obj,
            initX: stored.x,
            initY: stored.y,
            initZ: stored.z,
            expX: stored.expX,
            expY: stored.expY,
            expZ: stored.expZ,
          });
        }
      }
    });

    // Clean up old scroll listener if HMR re-triggers
    if (scrollListenerRef.current) {
      window.removeEventListener('scroll', scrollListenerRef.current);
    }

    // ── Smooth scroll inertia system ──
    // Instead of snapping to window.scrollY, we lerp a virtual scroll value
    // toward the real scroll position, giving a smooth deceleration effect.
    let smoothProgress = 0;           // the smoothed value we actually animate with
    let targetProgress = 0;           // where the real scroll position is
    const LERP_SPEED = 0.06;         // 0→1, lower = smoother/slower deceleration
    const SNAP_THRESHOLD = 0.0005;   // stop the loop when close enough

    // Update target on every scroll event
    scrollListenerRef.current = () => {
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      targetProgress = Math.min(window.scrollY / Math.max(totalScrollable, 1), 1);
    };

    window.addEventListener('scroll', scrollListenerRef.current, { passive: true });

    // Continuous animation loop — lerps smoothProgress toward targetProgress
    function animate() {
      rafRef.current = requestAnimationFrame(animate);

      // Lerp: smoothly chase the target
      smoothProgress += (targetProgress - smoothProgress) * LERP_SPEED;

      // Snap when close enough to avoid infinite micro-updates
      if (Math.abs(targetProgress - smoothProgress) < SNAP_THRESHOLD) {
        smoothProgress = targetProgress;
      }

      const progress = smoothProgress;

      // Rotation
      robot.rotation.y = _initRotY + progress * MAX_ROTATION;

      // Zoom
      const s = 1 + progress * (MAX_ZOOM - 1);
      robot.scale.x = _initScale.x * s;
      robot.scale.y = _initScale.y * s;
      robot.scale.z = _initScale.z * s;

      // Dismantle with power-of-5 easing
      const d = progress * progress * progress * progress * progress;
      for (let i = 0; i < parts.length; i++) {
        const p = parts[i];
        p.obj.position.x = p.initX + p.expX * d;
        p.obj.position.y = p.initY + p.expY * d;
        p.obj.position.z = p.initZ + p.expZ * d;
      }
    }

    // Set initial state from current scroll position
    scrollListenerRef.current();
    smoothProgress = targetProgress;

    // Start the animation loop
    animate();
  }

  if (!shouldLoad) return null;

  return (
    <>
      {!loaded && <div id="spline-fallback" className="fallback-pulse" />}
      <div id="spline-bg-container" className={loaded ? "loaded" : ""}>
         <Spline 
           scene="https://prod.spline.design/rHfFosNTzpRSxckd/scene.splinecode" 
           onLoad={handleLoad}
           className="spline-canvas"
         />
      </div>
    </>
  );
}
