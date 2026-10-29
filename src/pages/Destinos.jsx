import React from 'react';

export function Destinos() {
  const listaDestinos = [
    { id: 1, nome: 'Paris, França', desc: 'A cidade da luz com voo + hotel incluso.' },
    { id: 2, nome: 'Cancún, México', desc: 'Resorts all-inclusive à beira-mar.' },
    { id: 3, nome: 'Salvador, Brasil', desc: 'Cultura, praias e gastronomia única.' }
  ];

  return (
    <div>
      <h1 className="main-title">
        Conheça nossos <span className="highlight">Destinos</span>
      </h1>
      <p className="subtitle">Escolha o lugar ideal para a sua próxima aventura</p>

      <div className="card-grid">
        {listaDestinos.map(item => (
          <div key={item.id} className="card">
            <h3>{item.nome}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
