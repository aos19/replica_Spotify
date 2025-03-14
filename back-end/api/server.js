// API = "Application Programming Interface" serve para comunicar duas entidades em programação
// No nosso projeto ela vai se conectar com o banco de dados, pegando suas informações e trazendo-as para o front-end

import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import dotenv from "dotenv";
dotenv.config();

const URI = process.env.MONGODB_URI;

// Trazendo a função express para a varíavel app, onde será gerenciada a api 
const app = express();

// Declarando a variável PORT como a entrada de respostas/porta do servidor back-end (localhost:3000)
const PORT = 3000;

// MiddleWare, o cors vai tratar a req para que ela seja concluída por mais que o front-end e o back estejam em portas diferentes (http://localhost:5173 e http://localhost:3000/api/songs

app.use(cors());

// Criando uma requisição do tipo GET, que vai fazer uma leitura (get) dos artistas e mapeando o seu endereço, que agora será chamado de "endpoint" ao invés de "path" 
app.get("/", (request, response) => {
    response.send("Olá, Mundo!");
})

app.get("/artists", async (request, response) => {
    response.send(await db.collection("artists").find({}).toArray());
})

app.get("/songs", async (request, response) => {
    response.send(await db.collection("songs").find({}).toArray());
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});