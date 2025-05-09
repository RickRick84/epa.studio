import React from 'react';

export default function PokerApp() {
  return (
    <div style={{ height: '100vh', width: '100%', backgroundColor: 'black' }}>
      <iframe
        src="https://thepokerapp2025.vercel.app/"
        title="Poker App"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
}
