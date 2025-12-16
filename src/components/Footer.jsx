import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      padding: '40px 20px',
      textAlign: 'center',
      color: 'var(--color-text-dim)',
      borderTop: '1px solid var(--color-glass-border)',
      marginTop: '50px'
    }}>
      <p>&copy; {new Date().getFullYear()} Vodala Priyanshu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
