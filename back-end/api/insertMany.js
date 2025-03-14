import { artistArray } from "../../src/assets/database/artists.js";
import { songsArray } from "../../src/assets/database/songs.js";
import { db } from "./connect.js";

// Novo array de artist, mexendo em cada um dos elementos do array inicial
const newArtistArray = artistArray.map((currentArtistObj) => {
    const newArtistObj = { ...currentArtistObj };

    // Criado como uma cópia mas retira-se o id original
    delete newArtistObj.id; 
    
    return newArtistObj;
});


// Novo array de songs, mexendo em cada um dos elementos do array inicial 
const newSongsArray = songsArray.map((currentSongObj) => {
    const newSongObj = { ...currentSongObj };

    // Criado como uma cópia mas retira-se o id original
    delete newSongObj.id; 
    
    return newSongObj;
});

// Está executando a instrução de puxar do database vários artistas e músicas
const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db.collection("artists").insertMany(newArtistArray);

console.log(responseSongs);
console.log(responseArtists);