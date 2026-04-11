"use client";

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav id="main-nav" className="nav" role="navigation" aria-label="Main navigation">
        <a href="#" className="nav__logo">Brogence ●</a>

        <div className="nav__links">
          <a href="#services" className="nav__link nav__link--active">Services</a>
          <a href="#architects" className="nav__link">Founders</a>
          <a href="#contact" className="nav__link">Contact</a>
        </div>

        <button
          id="nav-hamburger"
          className={`nav__hamburger ${isOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span><span></span><span></span>
        </button>

        <a href="#contact" className="nav__cta">Book Audit</a>
      </nav>

      {/* Mobile Drawer */}
      <div id="nav-drawer" className={`nav__mobile-drawer ${isOpen ? 'open' : ''}`} role="menu" style={{ display: isOpen ? 'flex' : 'none' }}>
        <a href="#services" className="nav__link nav__link--active" role="menuitem" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#architects" className="nav__link" role="menuitem" onClick={() => setIsOpen(false)}>Founders</a>
        <a href="#contact" className="nav__link" role="menuitem" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
    </>
  );
}
