import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ zIndex: 10 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', marginBottom: '1rem', color: 'var(--color-text-dim)', letterSpacing: '2px', textTransform: 'uppercase' }}
        >
          Hello, I'm
        </motion.h2>

        <motion.h1
          className="text-gradient"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          style={{ fontSize: 'clamp(3rem, 10vw, 7rem)', fontWeight: 'bold', lineHeight: 1.1, marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}
        >
          Vodala Priyanshu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}
        >
          BTech Student | <span style={{ color: 'var(--color-primary)' }}>Gen AI Enthusiast</span> | Data Analysis Wizard
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}
        >
          <a href="#contact" className="glass-panel" style={{
            padding: '16px 40px',
            background: 'var(--color-primary)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '600',
            boxShadow: 'var(--shadow-glow)',
            transition: 'transform 0.2s',
            borderRadius: '50px'
          }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Let's Talk
          </a>
          <a href="#skills" className="glass-panel" style={{
            padding: '16px 40px',
            cursor: 'pointer',
            fontWeight: '600',
            background: 'rgba(255,255,255,0.05)',
            borderRadius: '50px',
            transition: 'transform 0.2s'
          }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            My Skills
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
