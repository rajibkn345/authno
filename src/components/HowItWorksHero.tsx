'use client';

export default function HowItWorksHero() {
  return (
         <section style={{
       padding: '6rem 0 2rem 0',
       backgroundColor: 'white',
       minHeight: '80vh',
       display: 'flex',
       alignItems: 'center'
     }}>
             <div className="flex c-how-it-hero" style={{
         maxWidth: '1400px',
         margin: '0 auto',
         padding: '0 2rem',
        width:'100%',
         gap: '4rem',
         alignItems: 'center'
       }}>
        {/* Left Section - Text Content */}
                 <div  className=" c-how-it-content" style={{
           display: 'flex',
           flexDirection: 'column',
           gap: '1.5rem'
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
             HOW IT WORKS
           </h1>

           {/* Description */}
           <p style={{
             fontSize: '1rem',
             color: '#2d2d2d',
             lineHeight: 1.4,
             margin: 0,
             fontWeight: '400',
             maxWidth: '500px'
           }}>
             EXPERIENCE HASSLE FREE AUTHENTICATION! OUR USER FRIENDLY PROCESS DELIVERS RESULTS IN AS LITTLE AS 15 MINUTES.
           </p>

          {/* CTA Button */}
          <div style={{
            marginTop: '1rem'
          }}>
            <button style={{
              backgroundColor: '#2d2d2d',
              color: 'white',
              border: 'none',
              padding: '1rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
              borderRadius: '0'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1a1a1a';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2d2d2d';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
            >
              COMING SOON
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '600px',
            aspectRatio: '4/3'
          }}>
                         <img
               src="/image 8.png"
               alt="How it works - smartphone authentication process"
               style={{
                 width: '100%',
                 height: '100%',
                 objectFit: 'cover'
               }}
             />
          </div>
        </div>
      </div>
    </section>
  );
}
