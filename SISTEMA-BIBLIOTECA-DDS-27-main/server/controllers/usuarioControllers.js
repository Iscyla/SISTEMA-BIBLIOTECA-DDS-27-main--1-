// IMPORTAÇÃO DO MODEL
const usuarioModels = require("../models/usuarioModels.js");
const { listar } = require("./livrosControllers.js");

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
  listar: async (req,res) => {
    try{
      //  Executa o model
      const listaUsuarios = await usuarioModels.listarUsuarios()
      // Renderiza a tela de lista, passado o que o model te mandou
      res.render('usuarios/listar', {listaUsuarios})
    }
    catch(erro){
      console.log(erro);
      res.render("erro", {erro, mensagem: "Erro ao listar os usuários"})
    }
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
