// tests/testEstoque.js
const axios = require('axios');

// Configuração do servidor
const baseURLProdutos = 'http://localhost:5001/create';
const baseURLEstoque = 'http://localhost:5001/estoque';

// Lista de 20 produtos para adicionar
const produtos = [
    { sku: '10001', nome: 'Produto Teste 1', descricao: 'Descrição do Produto Teste 1', preco: 10.00 },
    { sku: '10002', nome: 'Produto Teste 2', descricao: 'Descrição do Produto Teste 2', preco: 12.00 },
    { sku: '10003', nome: 'Produto Teste 3', descricao: 'Descrição do Produto Teste 3', preco: 14.00 },
    { sku: '10004', nome: 'Produto Teste 4', descricao: 'Descrição do Produto Teste 4', preco: 16.00 },
    { sku: '10005', nome: 'Produto Teste 5', descricao: 'Descrição do Produto Teste 5', preco: 18.00 },
    { sku: '10006', nome: 'Produto Teste 6', descricao: 'Descrição do Produto Teste 6', preco: 20.00 },
    { sku: '10007', nome: 'Produto Teste 7', descricao: 'Descrição do Produto Teste 7', preco: 22.00 },
    { sku: '10008', nome: 'Produto Teste 8', descricao: 'Descrição do Produto Teste 8', preco: 24.00 },
    { sku: '10009', nome: 'Produto Teste 9', descricao: 'Descrição do Produto Teste 9', preco: 26.00 },
    { sku: '10010', nome: 'Produto Teste 10', descricao: 'Descrição do Produto Teste 10', preco: 28.00 },
    { sku: '10011', nome: 'Produto Teste 11', descricao: 'Descrição do Produto Teste 11', preco: 30.00 },
    { sku: '10012', nome: 'Produto Teste 12', descricao: 'Descrição do Produto Teste 12', preco: 32.00 },
    { sku: '10013', nome: 'Produto Teste 13', descricao: 'Descrição do Produto Teste 13', preco: 34.00 },
    { sku: '10014', nome: 'Produto Teste 14', descricao: 'Descrição do Produto Teste 14', preco: 36.00 },
    { sku: '10015', nome: 'Produto Teste 15', descricao: 'Descrição do Produto Teste 15', preco: 38.00 },
    { sku: '10016', nome: 'Produto Teste 16', descricao: 'Descrição do Produto Teste 16', preco: 40.00 },
    { sku: '10017', nome: 'Produto Teste 17', descricao: 'Descrição do Produto Teste 17', preco: 42.00 },
    { sku: '10018', nome: 'Produto Teste 18', descricao: 'Descrição do Produto Teste 18', preco: 44.00 },
    { sku: '10019', nome: 'Produto Teste 19', descricao: 'Descrição do Produto Teste 19', preco: 46.00 },
    { sku: '10020', nome: 'Produto Teste 20', descricao: 'Descrição do Produto Teste 20', preco: 48.00 }
];

// Lista de produtos para adicionar ao estoque (quantidade em estoque é fictícia para o teste)
const estoque = [
    { id_local: 1, nome_produto: 'Produto Teste 1', quantidade: 10, sku: '10001' },
    { id_local: 1, nome_produto: 'Produto Teste 2', quantidade: 5, sku: '10002' },
    { id_local: 2, nome_produto: 'Produto Teste 3', quantidade: 8, sku: '10003' },
    { id_local: 2, nome_produto: 'Produto Teste 4', quantidade: 12, sku: '10004' },
    { id_local: 1, nome_produto: 'Produto Teste 5', quantidade: 20, sku: '10005' },
    { id_local: 1, nome_produto: 'Produto Teste 6', quantidade: 15, sku: '10006' },
    { id_local: 2, nome_produto: 'Produto Teste 7', quantidade: 7, sku: '10007' },
    { id_local: 2, nome_produto: 'Produto Teste 8', quantidade: 9, sku: '10008' },
    { id_local: 1, nome_produto: 'Produto Teste 9', quantidade: 13, sku: '10009' },
    { id_local: 1, nome_produto: 'Produto Teste 10', quantidade: 6, sku: '10010' },
    { id_local: 2, nome_produto: 'Produto Teste 11', quantidade: 4, sku: '10011' },
    { id_local: 2, nome_produto: 'Produto Teste 12', quantidade: 11, sku: '10012' },
    { id_local: 1, nome_produto: 'Produto Teste 13', quantidade: 3, sku: '10013' },
    { id_local: 1, nome_produto: 'Produto Teste 14', quantidade: 18, sku: '10014' },
    { id_local: 2, nome_produto: 'Produto Teste 15', quantidade: 9, sku: '10015' },
    { id_local: 2, nome_produto: 'Produto Teste 16', quantidade: 7, sku: '10016' },
    { id_local: 1, nome_produto: 'Produto Teste 17', quantidade: 5, sku: '10017' },
    { id_local: 1, nome_produto: 'Produto Teste 18', quantidade: 6, sku: '10018' },
    { id_local: 2, nome_produto: 'Produto Teste 19', quantidade: 12, sku: '10019' },
    { id_local: 2, nome_produto: 'Produto Teste 20', quantidade: 4, sku: '10020' }
];

// Função para adicionar produtos
async function adicionarProdutos() {
    try {
        for (const produto of produtos) {
            const response = await axios.post(baseURLProdutos, produto);
            console.log(`Produto adicionado: ${response.data.message}`);
        }
        console.log('Todos os produtos foram adicionados com sucesso.');
    } catch (error) {
        console.error('Erro ao adicionar produtos:', error.response ? error.response.data : error.message);
    }
}

// Função para adicionar produtos ao estoque
async function adicionarEstoque() {
    try {
        for (const item of estoque) {
            const response = await axios.post(baseURLEstoque, item);
            console.log(`Estoque atualizado: ${response.data.message}`);
        }
        console.log('Todos os produtos foram adicionados ao estoque com sucesso.');
    } catch (error) {
        console.error('Erro ao adicionar estoque:', error.response ? error.response.data : error.message);
    }
}

// Função para listar produtos no estoque
async function listarEstoque() {
    try {
        const response = await axios.get('http://localhost:5001/skus');
        console.log('Produtos cadastrados no estoque:', response.data);
    } catch (error) {
        console.error('Erro ao listar produtos no estoque:', error.response ? error.response.data : error.message);
    }
}

// Executa o script de adicionar produtos e depois o estoque
async function executarTestes() {
    await adicionarProdutos();  // Primeiro adiciona os produtos
    await adicionarEstoque();   // Depois adiciona ao estoque
    await listarEstoque();      // Lista os produtos cadastrados no estoque
}

executarTestes();
