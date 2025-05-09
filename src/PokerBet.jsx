import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeIcon from '/epa_home_button_.png';
import mobileImg from '/pokerbet_app_page_mobile.png';
import desktopImg from '/pokerbet_app_page_.png';

export default function PokerBet() {
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;
  const imageToShow = isMobile ? mobileImg : desktopImg;

  return (
    <div className="pokerbet-wrapper">
      {/* Imagen de fondo */}
      <img
        src={imageToShow}
        alt="Poker Bet"
        className="pokerbet-background"
      />

      {/* Ícono HOME */}
      <img
        src={homeIcon}
        alt="Inicio"
        onClick={() => navigate('/')}
        className="pokerbet-home"
      />
    </div>
  );
}
