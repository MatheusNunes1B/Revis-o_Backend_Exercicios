const express = require('express');
const app = express();
app.use(express.json());

// Mock data (simulando banco de dados)
let posts = [
    { id: 1, titulo: "Primeiro Post", conteudo: "Conteúdo do primeiro post", data_criacao: "2025-10-07T10:00:00Z", id_autor: 1 }
];

// Criar novo post (Create)
app.post('/posts', (req, res) => {
    res.status(201).json({ message: "Post criado com sucesso!" });
});

// Listar todos os posts (Read all)
app.get('/posts', (req, res) => {
    res.json(posts);
});

// Buscar post por ID (Read one)
app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post não encontrado.');
    res.json(post);
});

// Atualizar post (Update)
app.put('/posts/:id', (req, res) => {
    res.json({ message: `Post ${req.params.id} atualizado com sucesso!` });
});

// Deletar post (Delete)
app.delete('/posts/:id', (req, res) => {
    res.json({ message: `Post ${req.params.id} deletado com sucesso!` });
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
