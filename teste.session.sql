-- Criação da tabela de Locais (Lojas e Centros de Distribuição)
CREATE TABLE Locais (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  endereco VARCHAR(255) NOT NULL,
  tipo ENUM('loja', 'centro_distribuicao') NOT NULL
);

-- Criação da tabela de Produtos
CREATE TABLE Produtos (
  sku VARCHAR(50) PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  preco DECIMAL(10, 2) NOT NULL
);

-- Criação da tabela de Estoque
CREATE TABLE Estoque (
  id INT AUTO_INCREMENT PRIMARY KEY,
  sku VARCHAR(50) NOT NULL,
  id_local INT NOT NULL,
  quantidade INT NOT NULL,
  CONSTRAINT fk_produto FOREIGN KEY (sku) REFERENCES Produtos(sku),
  CONSTRAINT fk_local FOREIGN KEY (id_local) REFERENCES Locais(id),
  UNIQUE (sku, id_local)
);
