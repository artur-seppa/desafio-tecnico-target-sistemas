const express = require("express");
const router = require("./routes");
const cors = require("cors");

const app = express();

// Permite o acesso livre de requisições do backend
app.use(cors());

// Configura o recebimento de dados via JSON
app.use(express.json());

// Usa o router como middleware
app.use(router);

app.listen(3333, () => 
    console.log("server está rodando em http://localhost:3333")
);
