import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      padding: '40px 7.6923%',
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-subtle)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <p className="body-small" style={{ color: 'var(--text-muted)' }}>
            © {currentYear} LSL Technology. All rights reserved.
          </p>
        </div>
        <div>
          <p className="body-small" style={{ color: 'var(--text-muted)' }}>
            Expert IT Infrastructure Monitoring & Support
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
