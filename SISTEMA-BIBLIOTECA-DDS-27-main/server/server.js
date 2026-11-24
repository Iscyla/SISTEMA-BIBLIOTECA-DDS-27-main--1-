// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express");
const app = express();

//MÓDULO DO NODE PARA LIDAR COM CAMINHO DE ARQUIVOS
const path = require("path");

// IMPORTAR O MÓDULO DO DOTENV, LÊ O ARQUIVO .EV E JÁ CONFIGURA O BANCO
require("dotenv").config();

// DEFINE A PORTA DO SERVIDOR
const port = process.env.PORT || 5000;

//CONFIGURAR O EJS COM TEMPLATE ENGINE
//DEFINE O EJS COMO ENFINE DO FRONT - INTERPRETA AS PÁGINAS
app.set("view engine", "ejs");
//APONTAR PARA O EJS ONDE ESTÃO AS PÁGINAS
app.set("views", path.join(__dirname, "../client/views"));

// MIDDLEWARE PARA ENTEDER O JSON
// LÊ OS DADOS
app.use(express.json())
app.use(express.urlencoded({extends:true}))

// CONFIGURAÇÃO DO EXPRESS-SESSION
const session = require("express-session")
app.use(session({
  secret: 'cr7',
  resave: false,
  saveUninitialized: false
}))

// DISPONIBILIZA O USUÁRIO DA SESSÃO PARA O EJS USAR
app.use((req, res, next) =>{
  res.locals.usuario = req.session?.usuario || null;
  req.usuario = req.session?.usuario || null;
  next();
})

// CRIAÇÃO DAS ROTAS
// IMPORTAR AS ROTAS DE USUÁRIOS
const usuarioRoutes = require("./routes/usuarioRoutes.js")

app.use("/usuarios", usuarioRoutes)

// ROTAS PÚBLICAS
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  // Destruir a sessão ativa
  if (req.session.usuario){
    req.session.destroy()
  }
});

//TRAZ AS CONFIGURAÇÕES DO BANCO
const pool = require("./config/db.js");

// FORÇA A CONEXÃO COM O BANCO
(async () => {
  try {
    //SE O BANCO ESTIVER ATIVO, INICIA O SERVIDOR DO BANCO
    await pool.getConnection();
    console.log("Banco foi conectado");
    //SE O BANCO SUBIU, SOBE O BACKEND
    // FUNÇÃO PARA SUBIR O SERVIDOR
    app.listen(port, () => {
      console.log(`Servidor na porta: ${port}`);
      console.log(`Link: http://localhost:${port}`);
    });
  } catch (erro) {
    //SE DEU ERRO, AVISA E ENCERRA A TENTATIVA
    console.log("Erro ao conectar com o banco");
    process.exit(1);
  }
})();
