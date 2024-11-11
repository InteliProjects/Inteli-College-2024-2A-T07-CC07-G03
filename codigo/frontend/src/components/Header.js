import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <h1 className="App-title">Sistema de Inventário Vivo</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/produtos">Produtos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
