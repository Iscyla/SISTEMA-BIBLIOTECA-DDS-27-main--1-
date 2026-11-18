// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express")
const router = express.Router()

//IMPORTA O CONTROLLER DO USUÁRIO
const usuarioController = require("../controllers/usuarioControllers")

// ROTAS DO USUÁRIOS
//LOGIN
router.get("/login", usuarioController.login)

//CRUD
//MOSTRA A PÁGINA DE CRIAR USUÁRIO
router.get("/cadastrar", (req,res) => {
    res.render("usuarios/cadastrar");
})

//MOSTRA A PÁGINA DE LISTAR USUÁRIO
router.get("/listar", (req, res) => {
    res.render("usuarios/listar");
})

//MOSTRA A PÁGINA DE EDITAR USUÁRIO
router.get("/editar", (req, res) => {
    res.render("usuarios/editar");
})


//EXPORTA O ROUTER
module.exports = router
