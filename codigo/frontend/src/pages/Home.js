import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleUserSelection = (role) => {
    if (role === 'user') {
      navigate('/produtos');
    } else if (role === 'manager') {
      navigate('/gerente');
    }
  };

  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Bem-vindo!</h1>
        <p>Selecione o seu perfil:</p>
        <div className="button-container">
          <button className="btn-home" onClick={() => handleUserSelection('user')}>
            Usuário Final
          </button>
          <button className="btn-home" onClick={() => handleUserSelection('manager')}>
            Gerente de Lojas
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;