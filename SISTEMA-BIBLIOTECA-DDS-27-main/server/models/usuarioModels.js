//IMPORTANDO AS CONFIURAÇÕES DO BANCO
const db = require("../config/db.js")

// EXPORTAR AS FUNÇÕES DO MODEL
module.exports = {
    // LOGIN
    login : () => {
        console.log("Login usuário funcionando!");
    },
    // CRUD
    // CREATE
    criarUsuario: () => {
        console.log("Ta criado o usuário!");
    },
    //READ
    listarUsuarios: () => {
        console.log("Toma os usuários");
    },
    // UPDATE
    atualizarUsuario: () => {
        console.log("Atualizei um usuário");
    },

    //DELETE
    deletarUsuario: () => {
        console.log("Apaguei um usuário");
    }
}