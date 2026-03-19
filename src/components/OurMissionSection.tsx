'use client';

export default function OurMissionSection() {
  return (
    <section style={{
      padding: '2rem 0 1rem 0',
      backgroundColor: 'white',
      minHeight: '40vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div className="flex c-our-mission" style={{
        maxWidth: '1400px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        margin: '4rem auto 0', 
        padding: '0 2rem',
        width: '100%',
        gap: '4rem',
        alignItems: 'center'
      }}>
        {/* Left Content */}
        <div className="c-our-mission-content" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem'
        }}>
          {/* Main Heading */}
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#2d2d2d',
            margin: 0,
            letterSpacing: '0%',
            textTransform: 'uppercase',
            lineHeight: 1.1
          }}>
            OUR MISSION
          </h1>

          {/* Mission Description */}
          <p style={{
            fontSize: '1rem',
            color: '#2d2d2d',
            lineHeight: 1.6,
            margin: 0,
            fontWeight: '400',
            maxWidth: '600px'
          }}>
            WE EXIST TO BRING ABSOLUTE CONFIDENCE TO EVERY LUXURY PURCHASE. BY COMBINING CUTTING-EDGE AI WITH DEEP INDUSTRY KNOWLEDGE, WE EMPOWER PEOPLE AND COMPANIES TO MAKE BETTER INFORMED DECISIONS. THAT WAY WE CAN PROTECT AUTHENTICITY, PRESERVE VALUE, AND GIVE PEACE OF MIND WITH EVERY TRANSACTION.
          </p>
        </div>

        {/* Right Image */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img
            src="/image434.png"
            alt="Our mission illustration"
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain'
            }}
          />
        </div>
      </div>
    </section>
  );
}
