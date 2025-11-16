import React, { useState } from 'react';
import { Mail, Send, Loader2 } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API}/contact`, formData);
      console.log('Contact submission successful:', response.data);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 3000);
    } catch (err) {
      console.error('Error submitting contact form:', err);
      setError(err.response?.data?.detail || 'Failed to submit form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{
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
            Get In Touch
          </h2>
          <p className="body-medium" style={{ maxWidth: '700px' }}>
            Ready to enhance your IT infrastructure? Contact us to discuss your monitoring and support needs.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '60px'
        }}>
          {/* Contact Form */}
          <div>
            {submitted ? (
              <div style={{
                padding: '40px',
                background: 'rgba(0, 255, 209, 0.1)',
                border: '1px solid var(--brand-primary)',
                textAlign: 'center'
              }}>
                <h3 className="heading-2" style={{ marginBottom: '12px', color: 'var(--brand-primary)' }}>
                  Message Sent!
                </h3>
                <p className="body-small">
                  Thank you for reaching out. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <>
                {error && (
                  <div style={{
                    padding: '16px',
                    background: 'rgba(255, 0, 0, 0.1)',
                    border: '1px solid rgba(255, 0, 0, 0.5)',
                    marginBottom: '24px'
                  }}>
                    <p className="body-small" style={{ color: '#ff6b6b' }}>
                      {error}
                    </p>
                  </div>
                )}
                <form onSubmit={handleSubmit} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}>
                <div>
                  <label className="body-small" style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'var(--text-secondary)'
                  }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '16px',
                      borderRadius: '0px',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                  />
                </div>

                <div>
                  <label className="body-small" style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'var(--text-secondary)'
                  }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '16px',
                      borderRadius: '0px',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                  />
                </div>

                <div>
                  <label className="body-small" style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'var(--text-secondary)'
                  }}>
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '16px',
                      borderRadius: '0px',
                      outline: 'none',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                  />
                </div>

                <div>
                  <label className="body-small" style={{
                    display: 'block',
                    marginBottom: '8px',
                    color: 'var(--text-secondary)'
                  }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-primary)',
                      fontSize: '16px',
                      borderRadius: '0px',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn-primary"
                  disabled={loading}
                  style={{
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer'
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  {loading ? <Loader2 size={20} className="spin" /> : <Send size={20} />}
                </button>
              </form>
              </>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <div style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-subtle)',
              padding: '40px'
            }}>
              <h3 className="heading-2" style={{ marginBottom: '24px' }}>
                Contact Information
              </h3>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0, 255, 209, 0.1)'
                }}>
                  <Mail size={24} color="var(--brand-primary)" />
                </div>
                <div>
                  <p className="body-small" style={{ color: 'var(--text-muted)', marginBottom: '4px' }}>
                    Email
                  </p>
                  <a
                    href={`mailto:${mockContactInfo.email}`}
                    className="body-medium"
                    style={{
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                  >
                    {mockContactInfo.email}
                  </a>
                </div>
              </div>

              <div style={{
                padding: '24px',
                background: 'rgba(0, 255, 209, 0.05)',
                border: '1px solid var(--brand-primary)',
                marginTop: '32px'
              }}>
                <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  We typically respond within 24 hours during business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
