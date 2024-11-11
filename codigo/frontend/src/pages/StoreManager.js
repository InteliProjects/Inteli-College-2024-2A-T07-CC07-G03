import React, { useState, useEffect } from 'react';
import './StoreManager.css';

function StoreManager() {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [tipo, setTipo] = useState('loja');
  const [lojas, setLojas] = useState([]);
  const [idLocal, setIdLocal] = useState('');
  const [skus, setSkus] = useState([]);  
  const [skuSelecionado, setSkuSelecionado] = useState(''); 
  const [quantidade, setQuantidade] = useState('');
  const [idEstoque, setIdEstoque] = useState('');

  useEffect(() => {
    // Buscar lojas existentes do backend
    const fetchLojas = async () => {
      try {
        const response = await fetch('http://localhost:5001/locais');
        const data = await response.json();
        setLojas(data);
      } catch (error) {
        console.error('Erro ao buscar lojas:', error);
      }
    };

    // Buscar SKUs e nomes de produtos
    const fetchSkus = async () => {
      try {
        const response = await fetch('http://localhost:5001/skus');  
        const data = await response.json();
        setSkus(data);  
      } catch (error) {
        console.error('Erro ao buscar SKUs:', error);
      }
    };

    const fetchUltimoIdEstoque = async () => {
      try {
        const response = await fetch('http://localhost:5001/estoque/ultimo-id');  
        const data = await response.json();
        setIdEstoque(data.ultimoId + 1);  
      } catch (error) {
        console.error('Erro ao buscar último ID do estoque:', error);
      }
    };

    fetchLojas();
    fetchSkus();
    fetchUltimoIdEstoque(); 
  }, []);

  const handleSubmitLoja = async (e) => {
    e.preventDefault();
    
    const novoLocal = { nome, endereco, cep, tipo };

    try {
      const response = await fetch('http://localhost:5001/locais', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoLocal),
      });

      if (response.ok) {
        alert('Local inserido com sucesso!');
        setNome('');
        setEndereco('');
        setCep('');
        setTipo('loja');
      } else {
        alert('Erro ao inserir local');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao se conectar ao servidor');
    }
  };

  const handleSubmitProduto = async (e) => {
    e.preventDefault();
    
    const novoProduto = { 
        id_local: idLocal, 
        sku: skuSelecionado, 
        quantidade: quantidade, 
        id_estoque: idEstoque  
    };

    try {
      const response = await fetch('http://localhost:5001/estoque', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoProduto),
      });

      if (response.ok) {
        alert('Produto inserido com sucesso!');
        setIdLocal('');
        setSkuSelecionado('');
        setQuantidade('');
        setIdEstoque('');
      } else {
        alert('Erro ao inserir produto');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao se conectar ao servidor');
    }
};

  return (
    <div className="store-manager-page">
      <h1>Gerenciar Loja e Estoque</h1>
      <div className="forms-container">
        {/* Formulário de adicionar loja */}
        <form onSubmit={handleSubmitLoja}>
          <h2>Adicionar Novo Local</h2>
          <div className="form-group">
            <label htmlFor="nome">Nome da loja:</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="endereco">Endereço:</label>
            <input
              type="text"
              id="endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cep">CEP:</label>
            <input
              type="text"
              id="cep"
              value={cep}
              onChange={(e) => setCep(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="tipo">Tipo:</label>
            <select
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="loja">Loja</option>
              <option value="centro_distribuicao">Centro de Distribuição</option>
            </select>
          </div>

          <button type="submit" className="btn-submit">Adicionar Local</button>
        </form>

        {/* Formulário de adicionar produto ao estoque */}
        <form onSubmit={handleSubmitProduto}>
          <h2>Adicionar Produto ao Estoque</h2>
          <div className="form-group">
            <label htmlFor="idLocal">Selecionar Loja:</label>
            <select
              id="idLocal"
              value={idLocal}
              onChange={(e) => setIdLocal(e.target.value)}
              required
            >
              <option value="">Selecione uma loja</option>
              {lojas.map((loja) => (
                <option key={loja.id} value={loja.id}>
                  {loja.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="skuSelecionado">Selecionar Produto (SKU - Nome):</label>
            <select
              id="skuSelecionado"
              value={skuSelecionado}
              onChange={(e) => setSkuSelecionado(e.target.value)}
              required
            >
              <option value="">Selecione um produto</option>
              {skus.map((produto) => (
                <option key={produto.sku} value={produto.sku}>
                  {produto.sku} - {produto.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="quantidade">Quantidade:</label>
            <input
              type="number"
              id="quantidade"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="idEstoque">ID do Estoque (Preenchido automaticamente):</label>
            <input
              type="text"
              id="idEstoque"
              value={idEstoque}
              readOnly  // Torna o campo somente leitura
            />
          </div>

          <button type="submit" className="btn-submit">Adicionar Produto</button>
        </form>
      </div>
    </div>
  );
}

export default StoreManager;
