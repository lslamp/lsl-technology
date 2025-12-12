import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { mockFeatures } from '../mock';

const featureImages = {
  'Flexible Expertise': 'https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxJVCUyMHByb2Zlc3Npb25hbHxlbnwwfHx8fDE3MzY1OTA1MTR8MA&ixlib=rb-4.1.0&q=85',
  'Proven Tools': 'https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxzb2x1dGlvbnN8ZW58MHx8fHwxNzM2NTkwNTIyfDA&ixlib=rb-4.1.0&q=85',
  'Tailored Solutions': 'https://images.pexels.com/photos/3183181/pexels-photo-3183181.jpeg'
};

const WhyChooseUs = () => {
  return (
    <section style={{
      padding: '100px 7.6923%',
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-subtle)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Background Image */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '40%',
        height: '60%',
        backgroundImage: 'url(https://images.unsplash.com/photo-1584169417032-d34e8d805e8b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwyfHxkYXRhY2VudGVyfGVufDB8fHx8MTc2NTQ0NTI5OHww&ixlib=rb-4.1.0&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.08,
        zIndex: 0
      }} />
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ marginBottom: '60px' }}>
          <h2 className="display-large" style={{ marginBottom: '20px' }}>
            Why Choose LSL Technology
          </h2>
          <p className="body-medium" style={{ maxWidth: '700px' }}>
            Experience, flexibility, and dedication to keeping your infrastructure running smoothly.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px'
        }}>
          {mockFeatures.map((feature) => (
            <div
              key={feature.id}
              className="dark-hover"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                padding: '0',
                overflow: 'hidden',
                transition: 'all 0.4s ease-in-out'
              }}
            >
              {/* Feature Image */}
              <div style={{
                width: '100%',
                height: '200px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={featureImages[feature.title]} 
                  alt={feature.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.6
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, transparent 0%, var(--bg-secondary) 100%)'
                }} />
              </div>
              
              <div style={{
                padding: '32px 40px 40px',
                display: 'flex',
                gap: '20px'
              }}>
                <div style={{ flexShrink: 0, marginTop: '4px' }}>
                  <CheckCircle2 size={32} color="var(--brand-primary)" />
                </div>
                <div>
                  <h3 className="heading-2" style={{ marginBottom: '12px' }}>
                    {feature.title}
                  </h3>
                  <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
