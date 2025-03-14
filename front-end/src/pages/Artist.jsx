import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';


const Artist = () => {
  // useParams() vai extrair o valor do parâmetro {id} da URL
  const { id } = useParams();

  // Filtra "artistArray" para encontrar o artista que corresponde ao id da URL. Deve extrair as propriedades "name" (nome do artista) e "banner" (banner do artista)
  const { name, banner } = artistArray.filter(
    (currentArtistObj) => currentArtistObj._id === id
  )[0];


  // Filtra "songsArray" para obter todas as músicas cujo "artist" corresponde ao "name" do artista selecionado
  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === name
  );
  
  // Gera um índice aleatório baseado no número total de músicas do artista 
  const randomIndex = Math.floor(Math.random() * (songsArrayFromArtist.length - 1)
);

  // Obtém o id da música aleatória usando o índice calculado (randomIndex), usado para redirecionar o usuário para uma música aleatória de um artista
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;
  
    return (
    <div className='artist'>
      <div className="artist__header" 
      style= {{backgroundImage: `linear-gradient(to bottom, var(--shade), var(--_shade)), url(${banner})`
    }}
    >
      <h2 className="artist_title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>

        <SongList songsArray={songsArrayFromArtist} />
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon 
        className="single-item__icon single-item__icon--artist" 
        icon={faCirclePlay}
        />
      </Link>
    </div>
  );
};

export default Artist;