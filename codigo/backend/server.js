const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express(); // Inicializa o app aqui antes de usá-lo

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',  
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Servir arquivos estáticos do aplicativo React do frontend
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Lida com quaisquer requisições que não correspondam às rotas da API
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Função para conectar ao banco de dados SQLite
function getSqliteConnection() {
    return new sqlite3.Database(process.env.DB_NAME);
}

// Endpoint para verificar a conexão com o banco de dados
app.get('/db', (req, res) => {
    const db = getSqliteConnection();
    db.all("SELECT name FROM sqlite_master WHERE type='table';", [], (err, tables) => {
        if (err) {
            res.status(500).send(`Erro ao conectar ao banco de dados: ${err.message}`);
        } else {
            res.send(`Conectado ao banco de dados. Tabelas: ${JSON.stringify(tables)}`);
        }
        db.close();
    });
});

// Ler registros
app.get('/read', (req, res) => {
    const db = getSqliteConnection();
    db.all("SELECT sku, nome, descricao, preco FROM Produtos", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
        db.close();
    });
});

// Criar registros
app.post('/create', (req, res) => {
    const { sku, nome, descricao, preco } = req.body;
    const db = getSqliteConnection();
    db.run("INSERT INTO Produtos (sku, nome, descricao, preco) VALUES (?, ?, ?, ?)", [sku, nome, descricao, preco], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: 'Registro criado com sucesso' });
        }
        db.close();
    });
});

// Atualizar registros
app.put('/update/:sku', (req, res) => {
    const { sku } = req.params;
    const { nome, descricao, preco } = req.body;
    const db = getSqliteConnection();
    db.run("UPDATE Produtos SET nome = ?, descricao = ?, preco = ? WHERE sku = ?", [nome, descricao, preco, sku], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: 'Registro atualizado com sucesso' });
        }
        db.close();
    });
});

// Deletar registros
app.delete('/delete/:sku', (req, res) => {
    const { sku } = req.params;
    const db = getSqliteConnection();
    db.run("DELETE FROM Produtos WHERE sku = ?", [sku], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ message: 'Registro excluído com sucesso' });
        }
        db.close();
    });
});

// Consultar produto por SKU
app.get('/product/:sku', (req, res) => {
    const { sku } = req.params;
    const db = getSqliteConnection();
    db.get("SELECT sku, nome, descricao, preco FROM Produtos WHERE sku = ?", [sku], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (row) {
            res.json(row);
        } else {
            res.status(404).json({ error: "Produto não encontrado" });
        }
        db.close();
    });
});

// Calcular loja
app.post('/calcular-loja', (req, res) => {
    const { cep } = req.body;
    const cepNumerico = cep.replace(/\D/g, '');

    const db = getSqliteConnection();
    db.all(`SELECT nome, endereco, cep FROM Locais ORDER BY ABS(CAST(REPLACE(cep, '-', '') AS INT) - ?) LIMIT 3`, [cepNumerico], (err, lojas) => {
        if (err) {
            res.status(500).json({ sucesso: false, mensagem: 'Erro no servidor.', erro: err.message });
        } else if (lojas.length > 0) {
            res.json({ sucesso: true, lojasDisponiveis: lojas.map(loja => ({ location: loja.nome, address: loja.endereco })) });
        } else {
            res.json({ sucesso: false, mensagem: 'Nenhuma loja encontrada para este CEP.' });
        }
        db.close();
    });
});

// Adicionar loja
app.post('/locais', (req, res) => {
    const { nome, endereco, tipo = 'loja', cep } = req.body;
    const db = getSqliteConnection();
    db.run("INSERT INTO Locais (nome, endereco, tipo, cep) VALUES (?, ?, ?, ?)", [nome, endereco, tipo, cep], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(201).json({ message: "Loja adicionada com sucesso!" });
        }
        db.close();
    });
});

// Listar lojas
app.get('/locais', (req, res) => {
    const db = getSqliteConnection();
    db.all("SELECT id, nome FROM Locais", [], (err, lojas) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(lojas);
        }
        db.close();
    });
});

// Adicionar produto ao estoque
app.post('/estoque', (req, res) => {
    const { id_local, nome_produto, quantidade, sku } = req.body;
    const db = getSqliteConnection();
    db.get("SELECT sku FROM Produtos WHERE sku = ?", [sku], (err, produto) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!produto) {
            res.status(404).json({ error: "Produto não encontrado" });
        } else {
            db.run("INSERT INTO Estoque (sku, id_local, quantidade) VALUES (?, ?, ?)", [sku, id_local, quantidade], function (err) {
                if (err) {
                    res.status(500).json({ error: err.message });
                } else {
                    res.status(201).json({ message: "Produto adicionado ao estoque com sucesso!" });
                }
                db.close();
            });
        }
    });
});

// Listar todos os SKUs e nomes dos produtos
app.get('/skus', (req, res) => {
    const db = getSqliteConnection();
    db.all("SELECT sku, nome FROM Produtos", [], (err, produtos) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json(produtos);
        }
        db.close();
    });
});

// Obter o último ID do estoque
app.get('/estoque/ultimo-id', (req, res) => {
    const db = getSqliteConnection();
    db.get("SELECT MAX(id) as ultimoId FROM Estoque", [], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ ultimoId: row.ultimoId || 0 }); 
        }
        db.close();
    });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
