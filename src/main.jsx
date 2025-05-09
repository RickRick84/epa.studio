import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PokerApp from './PokerApp';
import PokerBet from './PokerBet';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokerapp" element={<PokerApp />} />
        <Route path="/pokerbet" element={<PokerBet />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
