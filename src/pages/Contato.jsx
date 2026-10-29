import React from 'react';

export function Contato() {
  return (
    <div>
      <h1 className="main-title">
        Fale <span className="highlight">Conosco</span>
      </h1>
      <p className="subtitle">Estamos prontos para tirar suas dúvidas</p>
      
      <div className="card-grid">
        <div className="card">
          <h3>Atendimento Via E-mail</h3>
          <p>suporte@connectflight.com.br</p>
        </div>
        <div className="card">
          <h3>Central Telefônica</h3>
          <p>(63) 99999-0000 / 0800 123 4567</p>
        </div>
      </div>
    </div>
  );
}
