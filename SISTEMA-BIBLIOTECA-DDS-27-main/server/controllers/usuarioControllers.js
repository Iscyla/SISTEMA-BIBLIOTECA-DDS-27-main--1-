// IMPORTAÇÃO DO MODEL
const usuarioModels = require("../models/usuarioModels.js");

// EXPORTAR AS FUNÇÕES DO CONTROLLER
module.exports = {
  // LOGIN
  login: (req, res) => {
    // EXECUTAR A FUNÇÃO DO MODEL
    usuarioModels.login();

    // DIZ A RESPOSTA
    res.send("Vou chamar o model para logar");
  },
  // CRUD
  // CREATE
  criar: (req, res) => {
    usuarioModels.criarUsuario();
    res.send("Criei um usuário");
  },
  //READ
  listar: (req, res) => {
    usuarioModels.listarUsuario();
    res.send("Mostrei a lista de usuários");
  },
  // UPDATE
  atualizar: (req, res) => {
    usuarioModels.atualizarUsuario();
    res.send("Atualizei um usuário");
  },

  //DELETE
  deletar: (req, res) => {
    usuarioModels.deletarUsuarior();
    res.send("Deletado o usuário ai");
  },
};
