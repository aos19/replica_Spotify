// import { MongoClient } from "mongodb";

// const URI = 
//     "mongodb+srv://replicaSpotify:arthurstopa@cluster1.kwgyr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// // Criando a nova classe, instanciando a conexão com o cliente
// const client = new MongoClient(URI);

// // Criando o nome do database que desejo acessar e exportando-o
// export const db = client.db("SpotifyAula");

// // Pegando tudo o que há dentro do database no collection de songs, retornando um objeto do mongo e transformando num array 
// // Foi adicionado o termo de JS assínc "await" para fazer com que ele espere essa busca na collection ficar pronta para daí sim,  execut-la

// // const songCollection = await db.collection("songs").find({}).toArray();

// // console.log(songCollection); 

// Arquivo com a função de configurar e estabelecer a conexão com o Mongo db

import { MongoClient } from "mongodb";

// String de conexão com o Mongo DB, indica o servidor remoto Mongo DB Atlas
const URI = "mongodb+srv://replicaSpotify:arthurstopa@cluster1.kwgyr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

// Criando a conexão com o MongoDB
const client = new MongoClient(URI);

// Função para conectar ao MongoDB corretamente
async function connectDB() {
    try {
        await client.connect(); // Aguarda a conexão com o banco
        console.log("🟢 Conectado ao MongoDB com sucesso!");
    } catch (error) {
        console.error("🔴 Erro ao conectar ao MongoDB:", error);
    }
}

connectDB();

export const db = client.db("SpotifyAula"); // Exporta o banco de dados
