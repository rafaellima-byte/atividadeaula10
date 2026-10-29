import React, { useState } from 'react';
import './App.css';
import { Home } from './pages/Home';
import { Destinos } from './pages/Destinos';
import { Ofertas } from './pages/Ofertas';
import { Contato } from './pages/Contato';
import { Navbar } from './components/Navbar';
import { FooterWave } from './components/FooterWave';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'destinos':
        return <Destinos />;
      case 'ofertas':
        return <Ofertas />;
      case 'contato':
        return <Contato />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        <div 
          className="brand-title"
          onClick={() => setActivePage('home')} 
        >
          ConnectFlight
        </div>

        {renderPage()}

        <Navbar activePage={activePage} setActivePage={setActivePage} />
      </div>

      <FooterWave />
    </div>
  );
}
