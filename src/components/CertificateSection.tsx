'use client';

export default function CertificateSection() {
  const newUserSteps = [
    {
      number: "1",
      title: "Scan QR Code",
      icon: "/Frame 41.png"
    },
    {
      number: "2", 
      title: "Open page to see your certificate",
      icon: "/Group 42.png"
    },
    {
      number: "3",
      title: "Leave your email if you would like a copy of the certificate",
      icon: "/Group 43.png"
    }
  ];

  const registeredUserSteps = [
    {
      number: "1",
      title: "Login to your account",
      icon: "/Frame 44.png"
    },
    {
      number: "2", 
      title: "Go into my authentications after you login",
      icon: "/Group 45.png"
    },
    {
      number: "3",
      title: "Request a copy to your registered email",
      icon: "/Group 46.png"
    }
  ];

  const renderIcon = (iconPath: string) => {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1rem auto'
      }}>
        <img
          src={iconPath}
          alt="Step icon"
          style={{
            width: '180px',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>
    );
  };

  return (
    <section style={{
      padding: '3rem 0',
      backgroundColor: '#000000',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 2rem',
        width: '100%'
      }}>
        {/* Main Heading */}
        <h2 style={{
          fontSize: '32px',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          marginBottom: '4rem',
          letterSpacing: '0%',
          textTransform: 'uppercase'
        }}>
          GET YOUR AUTHNO CERTIFICATE EASILY
        </h2>

        {/* New User Section */}
        <div style={{
          marginBottom: '4rem'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '3rem',
            letterSpacing: '0%',
            textTransform: 'uppercase'
          }}>
            FOR NEW USER
          </h3>

          <div className="certificate-steps-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'start'
          }}>
            {newUserSteps.map((step, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                {/* Icon */}
                {renderIcon(step.icon)}

                {/* Title */}
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'white',
                  margin: 0,
                  lineHeight: 1.2,
                  maxWidth: '250px'
                }}>
                  {step.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Registered User Section */}
        <div>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '3rem',
            letterSpacing: '0%',
            textTransform: 'uppercase'
          }}>
            FOR REGISTERED USER
          </h3>

          <div className="certificate-steps-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            alignItems: 'start'
          }}>
            {registeredUserSteps.map((step, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
              >
                {/* Icon */}
                {renderIcon(step.icon)}

                {/* Title */}
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'white',
                  margin: 0,
                  lineHeight: 1.2,
                  maxWidth: '250px'
                }}>
                  {step.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
