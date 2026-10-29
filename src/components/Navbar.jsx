import React from 'react';

export function Navbar({ activePage, setActivePage }) {
  const links = [
    { id: 'destinos', label: 'Destinos' },
    { id: 'ofertas', label: 'Ofertas' },
    { id: 'contato', label: 'Contato' }
  ];

  return (
    <>
      <div className="nav-divider" />
      <nav className="navbar">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => setActivePage(link.id)}
            className={`nav-link ${activePage === link.id ? 'active' : ''}`}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </>
  );
}
