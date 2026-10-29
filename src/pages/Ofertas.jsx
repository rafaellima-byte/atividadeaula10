import React from 'react';

export function Ofertas() {
  return (
    <div>
      <h1 className="main-title">
        Ofertas <span className="highlight">Imperdíveis</span>
      </h1>
      <p className="subtitle">Descontos de até 40% em pacotes selecionados!</p>
      
      <div className="card-grid">
        <div className="card">
          <h3>Pacote Nordeste - 5 Dias</h3>
          <p>Passagem aérea + Hotel 4 estrelas por R$ 1.200,00</p>
        </div>
        <div className="card">
          <h3>Europa Express - 7 Dias</h3>
          <p>Passagem + Seguro Viagem + Hospedagem por R$ 4.500,00</p>
        </div>
      </div>
    </div>
  );
}
