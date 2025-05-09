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
  <div
    style={{
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      position: 'relative',
    }}
  >
    {/* Botón Home */}
    <img
  src={homeIcon}
  alt="Inicio"
  onClick={() => navigate('/')}
  style={{
    position: 'relative',
    height: '100vh',
    overflow: 'hidden',
    top: '12px',
    left: '12px',
    width: isMobile ? '68px' : '60px',
    zIndex: 9999,       // Muy por encima de todo
    cursor: 'pointer',
    opacity: 0.8,
    transition: 'opacity 0.2s',
    pointerEvents: 'auto',
  }}
  onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
  onMouseOut={(e) => (e.currentTarget.style.opacity = 0.8)}
    />

    {/* Imagen central */}
    <img
      src={imageToShow}
      alt="Poker Bet"
      style={{
        maxWidth: '100%',
        maxHeight: '100%',
        width: 'auto',
        height: 'auto',
        objectFit: 'contain',
        display: 'block',
        margin: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    />
  </div>
  );
}
