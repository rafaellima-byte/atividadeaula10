import React from 'react';

export function Home() {
  return (
    <main>
      {/* 
        A imagem é carregada da pasta public/.
        Para trocar a imagem, basta substituir o arquivo 'illustration.svg' ou 'illustration.png' 
        na pasta public/ mantendo o mesmo nome de arquivo.
      */}
      <img 
        src="/illustration.svg" 
        alt="Ilustração ConnectFlight" 
        className="hero-image" 
      />

      <h1 className="main-title">
        O seu próximo <span className="highlight">destino</span> pode estar aqui...
      </h1>

      <p className="subtitle">
        Aqui você encontra uma seleção de <strong>pacotes completos</strong> para as suas férias!
      </p>

      <div className="description-box">
        <p>
          No <strong>ConnectFlight</strong> você encontra pacotes de viagens nacionais e internacionais que incluem: passagens aéreas, hotéis, café da manhã, e até seguro viagem com <strong>preços arrasadores</strong>!
        </p>
      </div>

      <p className="call-to-action">
        Se você ainda não tem um destino definido, confira nossa seção de ofertas.
      </p>
    </main>
  );
}
