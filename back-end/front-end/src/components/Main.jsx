import React from 'react';
import ItemList from  "./ItemList";
import { artistArray } from '../assets/database/artists';
import { songsArray } from '../assets/database/songs';

const Main = ({ type }) => {
  return (
    <div className="main">
      {/* Está resgatando componente ItemList criado no arquivo dele */}

      {/* Item List de Artistas */}
      {type === "artists" || type === undefined ?
      (<ItemList 
      title="Artistas" 
      items={14} 
      itemsArray = {artistArray} 
      path= "/artists" 
      idPath= "/artists"
      /> 
      ) : ( 
      <></>
    )}
      
      {/* Item List de Músicas */}
      {type === "songs" || type === undefined ? 
      (<ItemList 
      title="Músicas" 
      items={35} 
      itemsArray = {songsArray} 
      path= "/songs" 
      idPath= "/song"
      />
      ) : (
       <></> 
      )}
    </div>
  );
};

export default Main;


// Componentes (que em suma são funções) recebem "props" = Parâmetros! informações específicas

// Desestruturação = pegar um objeto e armazenar uma parte dele e não ele inteiro, técnica de armazenamento de objetos

// Tudo o que for escrito em js deve ser colocado entre parenteses!