// IMPORTANDO O MÓDULO DO MYSQL PARA CONECTAR AO BANCO
const mysql = require("mysql12/promise")

// CRIA UMA POOL DE CONEXÃO, PARA EVITAR ERROS NO BANCO POR SUPERLOTAÇÃO
const pool = mysql.createPool(
    {
        host: process.env.DB_HOST, // ONDE O BANCO ESTÁ HOSPEDADO
        user: process.env.DB_USER, // USUÁRIO QUE FARÁ A CONAXÃO
        password: process.env.DB_PASSWORD, // SENHA DO USUÁROIO
        database: process.env.DB_NAME, // BANCO AO QUAL SE DESEJA CONECTAR
        // SE TODOS ESTIVERAM OCUPADOS, DEIXA ESPERANDO, SEM DAR UM ERRO
        waitForConnections: true,
        // QUANTIDADE MÁXIMA DE CONEXÕES AO MESMO TEMPO
        connectionLimit: 10,
        // MÁXIMO DE LISTA DE ESPERA
        queueLimit: 0 // 0 = ILIMITADO
    }
)