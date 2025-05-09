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
    handleResize(); // Inicial
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
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
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
          width: '42px',
          opacity: 0.6,
          cursor: 'pointer',
          zIndex: 10,
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
        onMouseOut={(e) => (e.currentTarget.style.opacity = 0.6)}
      />

      {/* Imagen dinámica */}
      <img
        src={imageToShow}
        alt="Poker Bet"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '100%',
          objectFit: 'contain',
          objectPosition: 'center',
        }}
      />
    </div>
  );
}
