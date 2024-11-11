// tests/testLocais.js
const axios = require('axios');

// Configuração do servidor
const baseURL = 'http://localhost:5001/locais';

// Lista de lojas para adicionar
const lojas = [
    { nome: 'Loja Teste 1', endereco: 'Endereço Teste 1', tipo: 'loja', cep: '12345-678' },
    { nome: 'Loja Teste 2', endereco: 'Endereço Teste 2', tipo: 'loja', cep: '23456-789' },
    { nome: 'Loja Teste 3', endereco: 'Endereço Teste 3', tipo: 'loja', cep: '34567-890' },
    { nome: 'Loja Teste 4', endereco: 'Endereço Teste 4', tipo: 'loja', cep: '45678-901' },
    { nome: 'Loja Teste 5', endereco: 'Endereço Teste 5', tipo: 'loja', cep: '45679-901' },
    { nome: 'Loja Teste 6', endereco: 'Endereço Teste 6', tipo: 'loja', cep: '45675-901' },
    { nome: 'Loja Teste 7', endereco: 'Endereço Teste 7', tipo: 'loja', cep: '45673-901' },
];

async function adicionarLojas() {
    try {
        for (const loja of lojas) {
            const response = await axios.post(baseURL, loja);
            console.log(`Loja adicionada: ${response.data.message}`);
        }
        console.log('Todas as lojas foram adicionadas com sucesso.');
    } catch (error) {
        console.error('Erro ao adicionar lojas:', error.response ? error.response.data : error.message);
    }
}

async function listarLojas() {
    try {
        const response = await axios.get(baseURL);
        console.log('Lojas cadastradas:', response.data);
    } catch (error) {
        console.error('Erro ao listar lojas:', error.response ? error.response.data : error.message);
    }
}

// Executa o script de adicionar lojas e depois lista as lojas
async function executarTestes() {
    await adicionarLojas();
    await listarLojas();
}

executarTestes();
