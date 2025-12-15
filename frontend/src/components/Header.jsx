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
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center'
      }} onClick={() => scrollToSection('hero')}>
        <img 
          src="https://customer-assets.emergentagent.com/job_netops-support/artifacts/69wzib5c_LSL%20Technology%20logo%20CORRECT%20black%20background.png"
          alt="LSL Technology"
          style={{
            height: '50px',
            width: 'auto',
            objectFit: 'contain'
          }}
        />
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
