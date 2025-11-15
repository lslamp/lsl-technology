import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header style={{
      background: 'var(--bg-primary)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '16px 7.6923%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'fixed',
      top: 0,
      width: '100%',
      height: '80px',
      zIndex: 10,
      boxSizing: 'border-box'
    }}>
      <div style={{
        fontSize: '24px',
        fontWeight: '600',
        color: 'var(--text-primary)',
        cursor: 'pointer'
      }} onClick={() => scrollToSection('hero')}>
        LSL Technology
      </div>

      {/* Desktop Navigation */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px'
      }} className="desktop-nav">
        <a
          onClick={() => scrollToSection('services')}
          style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '400',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
        >
          Services
        </a>
        <a
          onClick={() => scrollToSection('tools')}
          style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '400',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
        >
          Tools
        </a>
        <a
          onClick={() => scrollToSection('contact')}
          style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '18px',
            fontWeight: '400',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
        >
          Contact
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          color: 'var(--text-primary)',
          cursor: 'pointer',
          padding: '8px'
        }}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav" style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          background: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          <a
            onClick={() => scrollToSection('services')}
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '400',
              cursor: 'pointer'
            }}
          >
            Services
          </a>
          <a
            onClick={() => scrollToSection('tools')}
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '400',
              cursor: 'pointer'
            }}
          >
            Tools
          </a>
          <a
            onClick={() => scrollToSection('contact')}
            style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontSize: '18px',
              fontWeight: '400',
              cursor: 'pointer'
            }}
          >
            Contact
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
