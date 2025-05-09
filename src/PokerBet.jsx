import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import homeIcon from '/epa_home_button_.png';
import pokerDesktop from '/pokerbet_app_page_.png';
import pokerMobile from '/pokerbet_app_page_mobile.png';

export default function PokerBet() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageToShow = isMobile ? pokerMobile : pokerDesktop;

  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Botón HOME */}
      <img
        src={homeIcon}
        alt="Inicio"
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          width: '72px', // MUCHO más grande como usted solicitó
          opacity: 0.6,
          cursor: 'pointer',
          zIndex: 10,
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
        onMouseOut={(e) => (e.currentTarget.style.opacity = 0.6)}
      />

      {/* Imagen centrada absolutamente */}
      <img
        src={imageToShow}
        alt="Poker Bet"
        style={{
          maxHeight: '100%',
          maxWidth: '100%',
          height: 'auto',
          width: 'auto',
          objectFit: 'contain',
          objectPosition: 'center',
        }}
      />
    </div>
  );
}
