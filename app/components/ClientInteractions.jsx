"use client";

import { useEffect } from 'react';

export default function ClientInteractions() {
  useEffect(() => {
    // 1. Reveal Animation Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: Unobserve after revealing to keep them visible
          // observer.unobserve(entry.target); 
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // 2. Navbar Scroll State
    const nav = document.getElementById('main-nav');
    const onScroll = () => {
      if (window.scrollY > 50) {
        nav?.classList.add('scrolled');
      } else {
        nav?.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial check
    onScroll();

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null; // Side-effect only component
}
