// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express")
const router = express.Router()

//IMPORTA O CONTROLLER DO USUÁRIO
const usuarioController = require("../controllers/usuarioControllers")

// ROTAS DO USUÁRIOS
//LOGIN
router.post("/login", usuarioController.login)

//CRUD
//MOSTRA A PÁGINA DE CRIAR USUÁRIO
router.get("/cadastrar", (req,res) => {
    res.render("usuarios/cadastrar");
})

// MANDAR AS INFORMAÇÕES DE CADASTRO DO CONTROLLER
router.post("/cadastrar", usuarioController.criar)

//MOSTRA A PÁGINA DE EDITAR USUÁRIO
router.get("/editar", (req, res) => {
    res.render("usuarios/editar");
})

//MOSTRA A PÁGINA DE LISTAR USUÁRIO
router.get("/listar", usuarioController.listar)

router.get("/", usuarioController.listar)
// ROTA DE DELETAR UM USUÁRIOS

router.post("/deletar/:id", usuarioController.deletar)

//EXPORTA O ROUTER
module.exports = router
