// IMPORTAÇÃO DO MODEL
const usuarioModels = require("../models/usuarioModels.js");
const { listar } = require("./livrosControllers.js");

// EXPORTAR AS FUNÇÕES DO CONTROLLER
module.exports = {
  // LOGIN
  login: async (req, res) => {
    try{
      // Coleta as informações do body de requisição
      const{email, senha} = req.body

      // Passa as informações pro model
      const usuarioLogado = await usuarioModels.login(email, senha)

      // Se não tiver usuário, já retorna a página de erro
      if(!usuarioLogado){
        return red.render ("erro", {erro, mensagem: "Credenciais inválidas"})
      }

      // Guardao usuário na sessão
      req.session.usuario = usuarioLogado

      // Ativa a função de salvar e garante que terá uma session
      req.session.save( (erro) => {
        // Se deu erro ao salvar informa
        if(erro){
          return res.render("erro", {erro, mensagem: "Erro ao criar sessão"})
        }

        // Se deu certo redireciona
        return res.redirect("/usuarios")
      })
    }
    catch (erro) {
      // Mostra o erro no terminal
      console.log(erro)
      // Renderiza a página do erro, mostrando pro usuário uma mensagem 
      res.render("erro", {erro, mensagem: "Erro ao logar"})
    }
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
  deletar: async (req, res) => {
    try{
      //Pegar o ID, vinso da url, através dos parâmetros
      const idDaUrl = req.params.id
      // Manda pro model o ID para ele fazer o serviço
      await usuarioModels.deletarUsuario(idDaUrl)
      // Redireciona para a lista de usuários
      res.redirect("/usuarios")
    }
    catch{
      console.log(erro);
      res.render("erro", {erro, mensagem:"Erro ao deletar o usuário"})
    }
  },
};
