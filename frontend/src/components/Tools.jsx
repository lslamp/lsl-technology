import React from 'react';
import { mockTools } from '../mock';

const Tools = () => {
  return (
    <section id="tools" style={{
      padding: '100px 7.6923%',
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-subtle)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ marginBottom: '60px' }}>
          <h2 className="display-large" style={{ marginBottom: '20px' }}>
            Monitoring Tools & Technologies
          </h2>
          <p className="body-medium" style={{ maxWidth: '700px', marginBottom: '20px' }}>
            Primary tools we specialize in for comprehensive infrastructure monitoring and security.
          </p>
          <p className="body-small" style={{ color: 'var(--text-muted)', maxWidth: '700px' }}>
            With years of IT industry experience, we have the aptitude to quickly learn and adapt to whatever tools suit your specific environment.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {mockTools.map((tool) => (
            <div
              key={tool.id}
              className="dark-hover"
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                padding: '32px',
                transition: 'all 0.4s ease-in-out'
              }}
            >
              <div style={{
                display: 'inline-block',
                padding: '6px 12px',
                background: 'rgba(0, 255, 209, 0.1)',
                border: '1px solid var(--brand-primary)',
                marginBottom: '16px',
                fontSize: '12px',
                color: 'var(--brand-primary)'
              }}>
                {tool.category}
              </div>
              <h3 className="heading-2" style={{ marginBottom: '12px' }}>
                {tool.name}
              </h3>
              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                {tool.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
