/* Estrutura inicial do backend com Node.js e Express */
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Conexão com o banco de dados
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sistema_vendas'
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conectado ao banco de dados!');
    }
});

// Rota para cadastrar um produto
app.post('/produtos', (req, res) => {
    const { nome, preco, estoque } = req.body;
    const sql = 'INSERT INTO produtos (nome, preco, estoque) VALUES (?, ?, ?)';
    db.query(sql, [nome, preco, estoque], (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({ message: 'Produto cadastrado com sucesso!' });
    });
});

// Rota para listar produtos
app.get('/produtos', (req, res) => {
    const sql = 'SELECT * FROM produtos';
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json(err);
        res.json(result);
    });
});

// Servidor rodando
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
