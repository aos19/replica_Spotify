import React from 'react';
import logoSpotify from '../assets/logo/spotify-logo.png'; // Digitar "../" faz você subir um nível para cima nas pastas do diretório
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    // Abaixo, não poderíamos identificar como "classe" pois esta ja é uma palavra reservada do JS,logo, usa-se "className"
    <div className="header">
        {/* Colocando a variável dentro da tag "img" por meio de chaves */}
        <Link to="/">
          <img src= {logoSpotify} alt="Logo do Spotify"/>
        </Link>

        {/* Âncora/título  */}
        <Link to= "/" className="titulo__link">
            <h1>Spotify</h1>
        </Link>
    </div>
  )
}

export default Header // Componente que pode ser usado em outras partes do documento;

// Exportar algo como "default" permite que eu importe ele com o nome que eu quiser no "main.jsx"

// Exportar sem default: deve ter o mesmo nome e com chaves

// Neste caso, estamos exportando o Header para o App.jsx