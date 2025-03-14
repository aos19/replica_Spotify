// Arquivo dedicado para fazer a requisição dos dados (trazer ao Front-end)

// Fecth ou Axios
import axios from 'axios'; // Permite fazer uma req HTTP

// Guardando a rota do servidor back-end
const URL = "http://localhost:3000";

// Fazendo a req: indica qual deve ser feita e qual endpoint será acessado
// Como se trata de uma requisição, oq será retornado será uma Promise
const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

// Devolveu apenas o array de objetos, depois de termos colocado o termo "data"
export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);