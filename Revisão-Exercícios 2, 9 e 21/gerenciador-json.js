//Exercício 9


// gerenciador-json.js

const fs = require('fs');
const path = require('path');

// Define o caminho do arquivo
const arquivoUsuarios =path.join (__dirname,'usuários.json')

//Cria arquivo inicial se não existir
function criarArquivoInicial() {
    const usuariosIniciais =  [
        { id: 1, nome: 'Matheus ', email: 'matheus@gmail.com', idade: 16},
        { id: 2, nome: 'Rodrigo', email:'rodrigo@gmail.com', idade:42},
        { id: 3, nome: 'Rogério', email: 'rogerio@gmail.com', idade: 46}
    ];
    
    if (!fs.existsSync(arquivoUsuarios)) {
        fs.writeFileSync(arquivoUsuarios, JSON.stringify(usuariosIniciais, null, 2));
        console.log('Arquivo usuarios.json criado!');
    }
}

//Função para ler usuários
function lerUsuarios() {
    try {
        const dados = fs.readFileSync(arquivoUsuarios, 'utf-8');
        return JSON.parse(dados);
    } catch (error) {
        console.error('Erro ao ler usuários:', error.message);
        return [];
    }
}

// Função para adicionar usuário
function adicionarUsuario(nome, email, idade) {
    const usuarios = lerUsuarios();
    
    const novoUsuario = {
        id: usuarios.length + 1,
        nome,
        email,
        idade
    };
    
    // Adiciona ao array
    usuarios.push(novoUsuario);
    
    // Salva no arquivo
    fs.writeFileSync(arquivoUsuarios, JSON.stringify(usuarios, null, 2));;
    console.log(`Usuário ${nome} adicionado!`);
}

// Função para listar usuários
function listarUsuarios() {
    const usuarios = lerUsuarios();
    console.log('=== LISTA DE USUÁRIOS ===');
    usuarios.forEach(usuario =>{
        console.log(`ID: ${usuario.id} | Nome: ${usuario.nome} | Email: ${usuario.email} | Idade: ${usuario.idade}`);
    });
}

// Executa as funções
criarArquivoInicial();
//Adiciona 2 usuários
adicionarUsuario('Ivan', 'ivan@gmail.com', 67);
adicionarUsuario('Lucas', 'Lucas@email.com', 27);
listarUsuarios();