import React from 'react';
import { Server, Network, Activity, Headphones } from 'lucide-react';
import { mockServices } from '../mock';

const iconMap = {
  server: Server,
  network: Network,
  activity: Activity,
  headphones: Headphones
};

const Services = () => {
  return (
    <section id="services" style={{
      padding: '100px 7.6923%',
      background: 'var(--bg-primary)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{ marginBottom: '60px' }}>
          <h2 className="display-large" style={{ marginBottom: '20px' }}>
            Our Services
          </h2>
          <p className="body-medium" style={{ maxWidth: '700px' }}>
            Comprehensive IT solutions designed to keep your infrastructure running at peak performance.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px'
        }}>
          {mockServices.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="dark-hover"
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  padding: '40px',
                  transition: 'all 0.4s ease-in-out'
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0, 255, 209, 0.1)',
                  marginBottom: '24px'
                }}>
                  <IconComponent size={24} color="var(--brand-primary)" />
                </div>
                <h3 className="heading-2" style={{ marginBottom: '16px' }}>
                  {service.title}
                </h3>
                <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
