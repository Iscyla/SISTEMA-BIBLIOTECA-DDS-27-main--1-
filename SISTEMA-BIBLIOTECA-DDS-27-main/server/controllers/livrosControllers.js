// IMPORTAÇÃO DO MODEL
const usuarioModels = require("../models/usuarioModels.js");

// EXPORTAR AS FUNÇÕES DO CONTROLLER
module.exports = {
  // LOGIN
  login: (req, res) => {
    // EXECUTAR A FUNÇÃO DO MODEL
    livrosModels.login();

    // DIZ A RESPOSTA
    res.send("Vou chamar o model para logar");
  },
  // CRUD
  // CREATE
  criar: async (req, res) => {
    try{
      // COLETA AS INFORMAÇÕES DO BODY DA REQUISIÇÃO 
      const {nome, email, senha, perfil} = req.body

      // PASSA AS INFORMAÇÕES MODEL
      await usuarioModels.criarUsuario(nome, email, senha, perfil)

      // REDIRECIONA PARA A PÁGINA DE LISTA DE USUÁRIO
      res.redirect("/usuarios/listar")
    }
    catch(erro){
      // MOSTRA O ERRO NO TERMINAL
      console.log(erro)
      // RENDERIZA A PÁGINA DE ERRO, MOSTRANDO PRO USUÁRIO UMA MENSAGEM
      res.render("erro", {erro, mensagem: "Erro a criar o usuário"})
    }
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
