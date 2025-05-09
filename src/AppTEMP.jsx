import React from 'react';
import './App.css';
import logo from '/epa_logo_web_.png';
import pokerAppLogo from '/poker_app_logo_.png';
import pokerBetLogo from '/poker_bet_logo.png';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="logo-container">
        <img src={logo} alt="EPA Studio" className="main-logo" />
      </div>
      <div className="nav-buttons">
        <img
          src={pokerAppLogo}
          alt="Poker App"
          className="nav-button"
          onClick={() => navigate('/pokerapp')}
        />
        <img
          src={pokerBetLogo}
          alt="Poker Bet"
          className="nav-button"
          onClick={() => navigate('/pokerbet')}
        />
      </div>
    </div>
  );
}
