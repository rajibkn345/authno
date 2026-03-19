'use client';

import { useRouter } from 'next/navigation';

export default function AboutSection() {
  const router = useRouter();

  return (
    <section style={{
      paddingTop: '6rem',
      paddingBottom: '0',
      backgroundColor: 'white',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem'
      }}>
        {/* About Us Section */}
        <div className="about-main-container flex " style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          {/* Left Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {/* Main Heading */}
            <h2 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#2d2d2d',
              lineHeight: 1.1,
              letterSpacing: '0%',
              margin: 0
            }}>
              ABOUT US
            </h2>

            {/* Description */}
            <p style={{
              fontSize: '1rem',
              color: '#2d2d2d',
              lineHeight: 1.6,
              margin: 0,
              fontWeight: '400'
            }}>
              WE HELP INDIVIDUALS, DEALERS, AND GLOBAL BRANDS FEEL CONFIDENT AND ASSURED BY COMBINING OUR ADVANCED AI EXPERTISE WITH YEARS OF INDUSTRY EXPERIENCE. OUR SOLE FOCUS IS DELIVERING THE MOST TRUSTED, ACCURATE LUXURY GOODS AUTHENTICATION.
            </p>

            {/* Learn More Link */}
            <div style={{
              marginTop: '1rem'
            }}>
              <button 
                onClick={() => router.push('/our-story')}
                style={{
                  backgroundColor: 'transparent',
                  color: '#2d2d2d',
                  border: 'none',
                  padding: '0.5rem 0',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  textDecoration: 'underline',
                  textUnderlineOffset: '0.25rem',
                  textDecorationThickness: '1px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#1a1a1a';
                  e.currentTarget.style.textDecorationThickness = '2px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#2d2d2d';
                  e.currentTarget.style.textDecorationThickness = '1px';
                }}
              >
                LEARN MORE
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              aspectRatio: '4/3'
            }}>
                             <img
                 src="/Image 5.png"
                 alt="About us team"
                 style={{
                   width: '100%',
                   height: '100%',
                   objectFit: 'cover',
                   boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                 }}
               />
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="c-how-it-work" style={{
          marginTop: '6rem'
        }}>
          <div className='c-how-it-work-container' style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 0rem',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            {/* Left Content */}
            <div className="c-how-it-content" >
              {/* Main Heading */}
              <h2 style={{
                fontSize: '32px',
                fontWeight: 'bold',
                color: '#2d2d2d',
                marginBottom: '2rem',
                letterSpacing: '0%',
                textTransform: 'uppercase',
                lineHeight: 1.1
              }}>
                HOW IT WORKS
              </h2>

              {/* Description */}
              <p style={{
                fontSize: '1rem',
                color: '#2d2d2d',
                lineHeight: 1.6,
                marginBottom: '3rem',
                fontWeight: '400',
                maxWidth: '600px'
              }}>
                HASSLE-FREE AUTHENTICATION IN JUST 3 STEPS. OUR USER-FRIENDLY PROCESS LETS YOU GET RESULTS IN AS LITTLE AS 1 HOUR, FROM ANYWHERE IN THE WORLD.
              </p>

              {/* Coming Soon Button */}
              <div style={{
                marginTop: '2rem'
              }}>
                <button 
                  onClick={() => router.push('/how-it-works')}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#2d2d2d',
                    border: 'none',
                    padding: '0.5rem 0',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    letterSpacing: '0.05em',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    textDecoration: 'underline',
                    textUnderlineOffset: '0.25rem',
                    textDecorationThickness: '1px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#1a1a1a';
                    e.currentTarget.style.textDecorationThickness = '2px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#2d2d2d';
                    e.currentTarget.style.textDecorationThickness = '1px';
                  }}
                >
                  COMING SOON
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img
                src="/image 44.png"
                alt="How it works illustration"
                style={{
                  maxWidth: '70%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
