import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "7396363147";

  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-container" style={{ padding: '100px 20px 150px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-panel"
        style={{ padding: '60px', width: '100%', maxWidth: '800px', textAlign: 'center', position: 'relative' }}
      >
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(255, 0, 51, 0.05) 0%, transparent 100%)',
          pointerEvents: 'none',
          borderRadius: '20px'
        }}></div>

        <h2 className="text-gradient" style={{ fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', marginBottom: '3rem', fontWeight: 'bold' }}>Get In Touch</h2>

        <div style={{ display: 'grid', gap: '2rem', marginBottom: '3rem', justifyContent: 'center' }}>

          {/* Phone Button */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Call Me</span>
            <div style={{ position: 'relative' }}>
              <motion.button
                onClick={handleCopy}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-panel"
                style={{
                  padding: '12px 24px',
                  fontSize: '1.2rem',
                  color: 'white',
                  border: '1px solid rgba(255, 0, 51, 0.3)',
                  cursor: 'pointer',
                  background: 'rgba(255, 0, 51, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                <span>Phone No.</span>
              </motion.button>

              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    style={{
                      position: 'absolute',
                      top: '110%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--color-primary)',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      fontWeight: 'bold',
                      whiteSpace: 'nowrap',
                      zIndex: 10
                    }}
                  >
                    Copied: {phoneNumber}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Me</span>
            <span style={{ fontSize: '1.5rem', fontWeight: '300' }}>vodalapriyanshu@gmail.com</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <SocialButton href="https://www.instagram.com/priyanshu_06__/" label="Instagram" />
          <SocialButton href="https://www.linkedin.com/in/priyanshu-vodala-971031302/" label="LinkedIn" />
          <SocialButton href="https://github.com/priyanshu-0605" label="GitHub" />
        </div>
      </motion.div>
    </section>
  );
};

const SocialButton = ({ href, label }) => (
  <motion.a
    href={href}
    whileHover={{ y: -5, backgroundColor: 'rgba(255, 0, 51, 0.2)' }}
    whileTap={{ scale: 0.95 }}
    className="glass-panel"
    style={{
      padding: '15px 35px',
      minWidth: '140px',
      color: 'white',
      fontWeight: '600',
      border: '1px solid rgba(255, 0, 51, 0.3)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      backdropFilter: 'blur(20px)'
    }}
    target="_blank" rel="noreferrer">
    {label}
  </motion.a>
);

export default Contact;
