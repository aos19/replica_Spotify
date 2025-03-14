import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCirclePlay,
    faBackwardStep,
    faForwardStep,
  } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Player = ({ duration, randomIdFromArtist, randomId2FromArtist, audio }) => {
  return (
    <div className="player">
        <div className="player__controllers">

        {/* Ícone de voltar uma música */}
        <Link to={`/song/${randomIdFromArtist}`}>
            <FontAwesomeIcon className='player__icon' icon={faBackwardStep} />
        </Link>
        
        {/* Ícone do play */}
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={faCirclePlay}
        />

        {/* Ícone de avançar uma música */}
        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link> 
    </div>

    <div className="player__progress">
        <p>00:00</p>

        <div className="player__bar">
            <div className="player__bar-progress"></div>    
        </div>

        <p>{duration}</p>    
    </div>

    <audio src={audio}></audio>        
</div>  
  );
};

export default Player;