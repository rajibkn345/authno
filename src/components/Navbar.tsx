'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'How it works', href: '/how-it-works' },
    { name: 'Services', href: '/services' },
    { name: 'About us', href: '/our-story' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'white',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease'
    }}>
      <div className="navbar-container" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem !important',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px',
        gap: '1rem'
      }}>
        {/* Logo */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%'
        }}>
          <Link href="/" style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none'
          }}>
            <img
              src="Logo.jpg"
              alt="Authno Logo"
              width="auto"
              height="40"
              
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(1rem, 3vw, 3rem)',
          flexWrap: 'nowrap'
        }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              style={{
                color: '#000000',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
                transition: 'color 0.3s ease',
                position: 'relative',
                padding: '0.5rem 0',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#666666';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#000000';
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '30px',
            height: '30px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0',
            zIndex: 1001
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <span style={{
            display: 'block',
            width: '25px',
            height: '3px',
            backgroundColor: '#000000',
            margin: '3px 0',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }}></span>
          <span style={{
            display: 'block',
            width: '25px',
            height: '3px',
            backgroundColor: '#000000',
            margin: '3px 0',
            transition: 'all 0.3s ease',
            opacity: isMenuOpen ? '0' : '1'
          }}></span>
          <span style={{
            display: 'block',
            width: '25px',
            height: '3px',
            backgroundColor: '#000000',
            margin: '3px 0',
            transition: 'all 0.3s ease',
            transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
          }}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999,
        display: isMenuOpen ? 'block' : 'none',
        transition: 'opacity 0.3s ease'
      }} onClick={toggleMenu}></div>

      {/* Mobile Menu */}
      <div style={{
        position: 'fixed',
        top: '0',
        right: '0',
        width: '280px',
        height: '100vh',
        backgroundColor: 'white',
        zIndex: 1000,
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease',
        boxShadow: '-5px 0 15px rgba(0, 0, 0, 0.1)',
        paddingTop: '80px',
        paddingLeft: '2rem',
        paddingRight: '2rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleMenu}
              style={{
                color: '#000000',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '1.2rem',
                transition: 'color 0.3s ease',
                padding: '0.5rem 0',
                borderBottom: '1px solid #f0f0f0'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#666666';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#000000';
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
