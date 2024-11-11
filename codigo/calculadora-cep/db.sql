-- Criação do banco de dados
CREATE DATABASE LojasBrasil;

-- Seleção do banco de dados
USE LojasBrasil;

-- Criação da tabela 'Lojas'
CREATE TABLE lojas (
    id_loja INT AUTO_INCREMENT PRIMARY KEY,
    nome_loja VARCHAR(100) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    cep CHAR(9) NOT NULL
);

-- Inserção dos dados de exemplo para 7 lojas com CEPs diferentes
INSERT INTO lojas (nome_loja, endereco, bairro, cidade, estado, cep) VALUES
('Loja Central', 'Av. Paulista, 1000', 'Bela Vista', 'São Paulo', 'SP', '01310-100'),
('Loja Sul', 'Rua Vergueiro, 2000', 'Vila Mariana', 'São Paulo', 'SP', '04102-000'),
('Loja Norte', 'Av. Braz Leme, 300', 'Santana', 'São Paulo', 'SP', '02022-000'),
('Loja Leste', 'Rua Tuiuti, 400', 'Tatuapé', 'São Paulo', 'SP', '03307-000'),
('Loja Oeste', 'Rua Clélia, 500', 'Lapa', 'São Paulo', 'SP', '05042-000'),
('Loja Rio', 'Av. Atlântica, 600', 'Copacabana', 'Rio de Janeiro', 'RJ', '22010-000'),
('Loja BH', 'Av. Afonso Pena, 700', 'Centro', 'Belo Horizonte', 'MG', '30130-002');

-- Seleção de todas as lojas para visualização
SELECT * FROM lojas;