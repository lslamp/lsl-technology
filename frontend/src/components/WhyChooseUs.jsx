import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { mockFeatures } from '../mock';

const WhyChooseUs = () => {
  return (
    <section style={{
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
              style={{
                display: 'flex',
                gap: '20px'
              }}
            >
              <div style={{ flexShrink: 0 }}>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
