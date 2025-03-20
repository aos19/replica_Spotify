// Arquivo dedicado para fazer a requisição dos dados (trazer ao Front-end)

// Importando o dotenv
// import "dotenv/config";
// dotenv.config();

// Fecth ou Axios
import axios from 'axios'; // Permite fazer uma req HTTP

const { NODE_ENV } = import.meta.env;

// Guardando a rota do servidor back-end (caso esteja em funcionamento, ele irá utilizar o endereço convencional do servidor)
const URL = NODE_ENV === 'development' ? "http://localhost:5000/api" : "/api";

// Fazendo a req: indica qual deve ser feita e qual endpoint será acessado
// Como se trata de uma requisição, oq será retornado será uma Promise
const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

// Devolveu apenas o array de objetos, depois de termos colocado o termo "data"
export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);