import React from 'react';
import { mockTools } from '../mock';

const toolImages = {
  'Zabbix': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxtb25pdG9yaW5nJTIwZGFzaGJvYXJkfGVufDB8fHx8MTczNjU4NzQxN3ww&ixlib=rb-4.1.0&q=85',
  'Grafana': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxtb25pdG9yaW5nJTIwZGFzaGJvYXJkfGVufDB8fHx8MTczNjU4NzQxN3ww&ixlib=rb-4.1.0&q=85',
  'Observium': 'https://images.unsplash.com/photo-1762279388979-6a430989284c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw2fHxtb25pdG9yaW5nJTIwZGFzaGJvYXJkfGVufDB8fHx8MTczNjU4NzQxN3ww&ixlib=rb-4.1.0&q=85',
  'WireGuard VPN': 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw4fHxtb25pdG9yaW5nJTIwZGFzaGJvYXJkfGVufDB8fHx8MTczNjU4NzQxN3ww&ixlib=rb-4.1.0&q=85',
  'OpenVPN': 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw3fHxtb25pdG9yaW5nJTIwZGFzaGJvYXJkfGVufDB8fHx8MTczNjU4NzQxN3ww&ixlib=rb-4.1.0&q=85'
};

const Tools = () => {
  return (
    <section id="tools" style={{
      padding: '100px 7.6923%',
      background: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-subtle)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url(https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHxkYXRhY2VudGVyfGVufDB8fHx8MTc2NTQ0NTI5OHww&ixlib=rb-4.1.0&q=85)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.05,
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
