const express = require('express');
const app = express();
const usuarios = require('./dataBase/usuarios');
const homePage = require('./metodos/uriHome/homePage');
const addUsuario = require('./metodos/uriUsuarios/addUsuario');
const atualizarCadastro = require('./metodos/uriUsuarios/atualizarCadastro');
const listarTodosUsuarios = require('./metodos/uriUsuarios/listarTodosUsuarios');
const listarUsuario = require('./metodos/uriUsuarios/listarUsuario');
const removerUsuario = require('./metodos/uriUsuarios/removerUsuario');

app.use(express.json())
// metodos de usuario
atualizarCadastro(app, usuarios) // atualiza o cadastro do  usuario
removerUsuario(app, usuarios) // remove usuario da URI em específico
homePage(app) // pagina inicial
addUsuario(app, usuarios) // adiciona usuario ao final da lista existente
listarTodosUsuarios(app, usuarios) // lista todos os usuarios existentes
listarUsuario(app, usuarios) // lista usuario específico da URI
//sobe um servidor na porta 3000 doh localhoste
app.listen(3000, () => {
    console.log('Loading')
})