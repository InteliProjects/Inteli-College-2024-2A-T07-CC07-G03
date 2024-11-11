import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductAvailability.css';

function ProductAvailability() {
  const { sku } = useParams();
  const [cep, setCep] = useState('');
  const [availability, setAvailability] = useState(null);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/product/${sku}`);
        if (!response.ok) {
          throw new Error(`Erro ao buscar dados do produto: ${response.status}`);
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (sku) {
      fetchProduct();
    }
  }, [sku]);

  const handleCheckAvailability = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/calcular-loja', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cep }),
      });

      if (response.ok) {
        const data = await response.json();
        setAvailability(data.lojasDisponiveis);
      } else {
        console.error('Erro ao calcular a disponibilidade.');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
    }
  };

  return (
    <div className="product-availability-page">
      <div className="product-container">
        <div className="product-details">
          {loading ? (
            <p>Carregando dados do produto...</p>
          ) : error ? (
            <p>Erro: {error}</p>
          ) : product ? (
            <>
              <h1 className="product-title">{product.nome}</h1>
              <p className="product-description">{product.descricao}</p>
              <p className="product-price">R$ {product.preco}</p>
            </>
          ) : (
            <p>Produto não encontrado.</p>
          )}
        </div>
      </div>
  
      <div className="cep-checker-container">
        <div className="cep-checker">
          <h2>Verificar Disponibilidade por CEP</h2>
          <form onSubmit={handleCheckAvailability}>
            <input
              type="text"
              placeholder="Digite o CEP"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              className="cep-input"
            />
            <button type="submit" className="btn-primary">Verificar</button>
          </form>
        </div>
  
        {availability && (
          <div className="availability-result">
            <h3>Locais Disponíveis:</h3>
            <ul>
              {availability.map((loc, index) => (
                <li key={index}>
                  <p>{loc.location}</p>
                  <p>{loc.address}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );   
}

export default ProductAvailability;