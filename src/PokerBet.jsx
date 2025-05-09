import React, { useEffect, useState } from 'react';
import pokerDesktop from '/pokerbet_app_page_.png';
import pokerMobile from '/pokerbet_app_page_mobile.png';
import homeIcon from '/epa_home_button_.png';
import { useNavigate } from 'react-router-dom';

function PokerBet() {
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
    <div className="pokerbet-container">
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
      <img
        src={imageToShow}
        alt="Poker Bet"
        className="pokerbet-image"
      />
    </div>
  );
}

export default PokerBet;
