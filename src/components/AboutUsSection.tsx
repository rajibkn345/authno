'use client';

export default function AboutUsSection() {
  return (
    <>
      <section className="c-about-us-section"
        style={{
          padding: '2rem 0',
          backgroundColor: 'white',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem',
            width: '100%',
          }}
        >
          {/* Main Heading */}
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#2d2d2d',
              margin: 0,
              marginBottom: '3rem',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              lineHeight: 1.2,
            }}
          >
            ABOUT US
          </h2>

          {/* Description Paragraph */}
          <p
            style={{
              fontSize: '1rem',
              color: '#2d2d2d',
              lineHeight: 1.6,
              margin: 0,
              marginBottom: '2rem',
              fontWeight: '400',
              width: '100%',
            }}
          >
            FOUNDED BY A TEAM PASSIONATE ABOUT LUXURY, TECHNOLOGY, AND TRUST,
            WE&apos;VE SPENT YEARS PERFECTING THE ART AND SCIENCE OF
            AUTHENTICATION. OUR SPECIALISTS WORK HAND-IN-HAND WITH ADVANCED AI
            SYSTEMS TO DELIVER RESULTS YOU CAN DEPEND ON.
          </p>

          {/* Four Images Side by Side */}
          <div
            className="about-us-images-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Image 1 */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="/ab1.png"
                alt="About us image 1"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '0',
                }}
              />
            </div>

            {/* Image 2 */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="/ab2.png"
                alt="About us image 2"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '0',
                  filter: 'grayscale(100%)',
                }}
              />
            </div>

            {/* Image 3 */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="/ab3.png"
                alt="About us image 3"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '0',
                  filter: 'grayscale(100%)',
                }}
              />
            </div>

            {/* Image 4 */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="/ab4.png"
                alt="About us image 4"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '0',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: '2rem 0',
          backgroundColor: 'white',
          
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="c-our-process"
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 2rem',
            width: '100%',
          }}
        >
          {/* Main Heading */}
          <h2
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#2d2d2d',
              margin: 0,
              marginBottom: '3rem',
              letterSpacing: '0%',
              textTransform: 'uppercase',
              lineHeight: 1.2,
            }}
          >
            OUR PROCESS
          </h2>

          {/* Description Paragraph */}
          <p
            style={{
              fontSize: '1rem',
              color: '#2d2d2d',
              lineHeight: 1.6,
              margin: 0,
              marginBottom: '2rem',
              fontWeight: '400',
              width: '100%',
              textTransform:'uppercase'
            }}
          >
            Our process is designed for ease and accuracy. Simply start by
            uploading your item’s details and images. Our AI instantly begins
            analysis, checking for authenticity markers and market value. Within
            as little as 15 minutes, you’ll receive a clear and trustworthy
            assessment.
          </p>
        </div>
      </section>
    </>
  );
}
