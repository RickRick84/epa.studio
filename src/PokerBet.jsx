import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pokerDesktop from '/pokerbet_app_page_.png';
import pokerMobile from '/pokerbet_app_page_mobile.png';
import homeIcon from '/epa_home_button_.png';

export default function PokerBet() {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

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
    <div style={{
      backgroundColor: 'black',
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      padding: '16px',
      boxSizing: 'border-box',
    }}>
      {/* Botón Home */}
      <img
        src={homeIcon}
        alt="Inicio"
        onClick={() => navigate('/')}
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          width: '72px',
          opacity: 0.6,
          cursor: 'pointer',
          zIndex: 10,
        }}
        onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
        onMouseOut={(e) => (e.currentTarget.style.opacity = 0.6)}
      />

      {/* Imagen controlada */}
      <img
        src={imageToShow}
        alt="Poker Bet"
        style={{
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
        }}
      />
    </div>
  );
}
