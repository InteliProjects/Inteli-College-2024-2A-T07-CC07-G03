const express = require('express');
// Substitua o mysql pelo mysql2
const mysql = require('mysql2');
const app = express();
const port = 3001;

// Configuração de conexão ao banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'marina04',  // Altere para sua senha
    database: 'minha_base_de_dados'
});

// Conectar ao banco de dados
db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conectado ao banco de dados MySQL!');
});
app.get('/calcular-loja', (req, res) => {
    const cepUsuario = req.query.cep;

    if (!cepUsuario) {
        return res.json({ sucesso: false, mensagem: 'CEP inválido.' });
    }

    // Remover caracteres não numéricos do CEP do usuário
    const cepNumerico = cepUsuario.replace(/\D/g, '');

    // Consulta SQL para encontrar a loja mais próxima
    const query = `SELECT nome_loja, endereco, bairro, cidade, estado, cep 
                   FROM lojas 
                   ORDER BY ABS(CAST(REPLACE(cep, '-', '') AS UNSIGNED) - ?) LIMIT 1`;

    db.query(query, [cepNumerico], (err, results) => {
        if (err) {
            console.error('Erro ao buscar a loja mais próxima:', err);
            return res.status(500).json({ sucesso: false, mensagem: 'Erro ao realizar a busca.' });
        }

        if (results.length > 0) {
            const lojaMaisProxima = results[0];
            res.json({
                sucesso: true,
                loja: {
                    nome: lojaMaisProxima.nome_loja,
                    endereco: lojaMaisProxima.endereco,
                    bairro: lojaMaisProxima.bairro,
                    cidade: lojaMaisProxima.cidade,
                    estado: lojaMaisProxima.estado,
                    cep: lojaMaisProxima.cep
                }
            });
        } else {
            res.json({ sucesso: false, mensagem: 'Nenhuma loja encontrada para este CEP.' });
        }
    });
});


// Endpoint para buscar todos os dados das lojas
app.get('/db', (req, res) => {
    const query = 'SELECT * FROM lojas';  // Consulta para pegar todos os dados da tabela "lojas"
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Erro ao buscar dados do banco:', err);
            return res.status(500).json({ sucesso: false, mensagem: 'Erro ao buscar dados.' });
        }

        // Retornar os resultados como JSON
        res.json({ sucesso: true, dados: results });
    });
});

// Servir o arquivo HTML
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
