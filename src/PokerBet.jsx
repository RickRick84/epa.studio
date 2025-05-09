import React from 'react';
import pokerImage from '/pokerbet_app_page_.png';

export default function PokerBet() {
  return (
    <div style={{
      backgroundColor: 'black',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <img src={pokerImage} alt="Poker Bet" style={{ maxWidth: '90%', maxHeight: '90%' }} />
    </div>
  );
}
