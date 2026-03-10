import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';



const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      animate={{
        backgroundColor: scrolled ? 'rgba(5, 2, 2, 0.8)' : 'rgba(5, 2, 2, 0)',
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
        borderBottom: scrolled ? '1px solid rgba(255, 50, 70, 0.1)' : '1px solid transparent',
        padding: scrolled ? '15px 30px' : '25px 30px'
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        boxSizing: 'border-box'
      }}
    >
      <div className="logo">
        <a
          href="#home"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.8rem',
            fontWeight: '700',
            color: 'var(--color-text)',
            textDecoration: 'none',
            letterSpacing: '-1px'
          }}
          onMouseOver={(e) => e.target.style.color = 'var(--color-primary)'}
          onMouseOut={(e) => e.target.style.color = 'var(--color-text)'}
        >
          V.P
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8" style={{ display: 'flex', gap: '2.5rem' }}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{
              color: 'var(--color-text)',
              fontSize: '0.95rem',
              fontWeight: '500',
              transition: 'color 0.3s',
              opacity: 0.8
            }}
            onMouseOver={(e) => { e.target.style.color = 'var(--color-primary)'; e.target.style.opacity = 1; }}
            onMouseOut={(e) => { e.target.style.color = 'var(--color-text)'; e.target.style.opacity = 0.8; }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
