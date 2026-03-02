'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    if (!email.includes('@')) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    
    try {
      // Send email to your address
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          to: 'andy@authno.com',
          subject: 'New Subscription from Authno Website',
          message: `New subscriber: ${email}`
        }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer style={{
      backgroundColor: 'white',
      padding: '4rem 0 2rem 0'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem'
      }}>
        {/* Main Footer Content */}
        <div className="footer-main-content" style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start'
        }}>
          {/* Subscription Section */}
          <div className="footer-subscription" style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            maxWidth: '600px'
          }}>
            <h3 style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontWeight: 'bold',
              color: '#2d2d2d',
              margin: 0,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              lineHeight: 1.4
            }}>
              SUBSCRIBE NOW TO BE THE FIRST TO GET ACCESS!
            </h3>

                         <form className="footer-form" onSubmit={handleSubscribe} style={{
               display: 'flex',
               gap: '0',
               alignItems: 'stretch',
               maxWidth: '500px'
             }}>
               <input
                 type="email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 placeholder="Email Address"
                 required
                 style={{
                   flex: 1,
                   padding: '1rem 1.25rem',
                   border: '1px solid #d1d5db',
                   borderRadius: '0',
                   fontSize: '1rem',
                   color: '#2d2d2d',
                   backgroundColor: 'white',
                   outline: 'none',
                   transition: 'border-color 0.3s ease',
                   borderRight: 'none'
                 }}
                 onFocus={(e) => {
                   e.currentTarget.style.borderColor = '#6b7280';
                 }}
                 onBlur={(e) => {
                   e.currentTarget.style.borderColor = '#d1d5db';
                 }}
               />
               <button
                 type="submit"
                 disabled={isSubmitting}
                 style={{
                   padding: '1rem 2rem',
                   backgroundColor: isSubmitting ? '#e8e7e6' : '#F2F1F0',
                   border: '1px solid #d1d5db',
                   borderRadius: '0',
                   fontSize: '0.875rem',
                   fontWeight: '500',
                   color: isSubmitting ? '#9ca3af' : '#6b7280',
                   cursor: isSubmitting ? 'not-allowed' : 'pointer',
                   textTransform: 'uppercase',
                   letterSpacing: '0.05em',
                   transition: 'all 0.3s ease',
                   whiteSpace: 'nowrap',
                   opacity: isSubmitting ? 0.7 : 1
                 }}
                 onMouseEnter={(e) => {
                   if (!isSubmitting) {
                     e.currentTarget.style.backgroundColor = '#e8e7e6';
                     e.currentTarget.style.borderColor = '#9ca3af';
                   }
                 }}
                 onMouseLeave={(e) => {
                   if (!isSubmitting) {
                     e.currentTarget.style.backgroundColor = '#F2F1F0';
                     e.currentTarget.style.borderColor = '#d1d5db';
                   }
                 }}
               >
                 {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE'}
               </button>
             </form>

            {/* Message Display */}
            {message && (
              <p style={{
                fontSize: '0.875rem',
                color: message.includes('Thank you') ? '#059669' : '#dc2626',
                margin: '0.5rem 0 0 0',
                lineHeight: 1.4,
                fontWeight: '500'
              }}>
                {message}
              </p>
            )}

          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div style={{
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <span style={{
            fontSize: '0.75rem',
            color: '#6b7280',
            fontWeight: '500',
            letterSpacing: '0.05em',
            textTransform: 'uppercase'
          }}>
            2026 AUTHNO © ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </footer>
  );
}
