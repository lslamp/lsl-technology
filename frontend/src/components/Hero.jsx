import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 7.6923% 60px',
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '1400px',
        width: '100%',
        margin: '0 auto'
      }}>
        <div style={{
          maxWidth: '900px'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid var(--border-subtle)',
            marginBottom: '40px'
          }}>
            <Shield size={16} color="var(--brand-primary)" />
            <span style={{
              fontSize: '14px',
              color: 'var(--text-secondary)'
            }}>Enterprise-Grade IT Solutions</span>
          </div>

          <h1 className="display-huge" style={{
            marginBottom: '30px'
          }}>
            Expert IT Infrastructure Monitoring & Support
          </h1>

          <p className="body-large" style={{
            marginBottom: '20px',
            color: 'var(--text-secondary)',
            maxWidth: '700px'
          }}>
            24/7 Network Monitoring Solutions
          </p>

          <p className="body-medium" style={{
            marginBottom: '60px',
            color: 'var(--text-secondary)',
            maxWidth: '700px'
          }}>
            Comprehensive operational advice, infrastructure consultation, network setup, and complete monitoring management for your entire IT environment.
          </p>

          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <button className="btn-primary" onClick={scrollToContact}>
              Get Started
              <ArrowRight size={20} />
            </button>
            <button className="btn-secondary" onClick={() => {
              const element = document.getElementById('services');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
