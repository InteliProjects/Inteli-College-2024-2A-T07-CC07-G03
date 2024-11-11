import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem'; 
import { useNavigate } from 'react-router-dom';

function Products({ setSku }) {
  const [products, setProducts] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5001/read');
        const data = await response.json();  

        if (Array.isArray(data)) {
          setProducts(data);  
        } else {
          console.error("Formato inesperado dos dados:", data);
        }
      } catch (error) {
        console.error('Erro ao buscar os produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  // Função para navegar ao detalhe do produto
  const handleProductClick = (sku) => {
    setSku(sku);
    navigate(`/product/${sku}`);
  };

  return (
    <div className="products-container">
      <h2>Produtos</h2>
      <ul className="product-list">
        {products.length > 0 ? (
          products.map((product, index) => (
            <ProductItem
              key={index}
              sku={product.sku}  
              name={product.nome}  
              description={product.descricao} 
              price={product.preco}  
              onClick={() => handleProductClick(product.sku)}
            />
        ))        
        ) : (
          <p>Nenhum produto disponível.</p>
        )}
      </ul>
    </div>
  );
}  

export default Products;