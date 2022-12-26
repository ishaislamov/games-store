import React, { useState } from 'react';
import { GameItem } from '../game-item';
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { ContentWrapper } from '../content-wrapper';


export const Games = () => {
  const [game, setGame] = useState([]);
  React.useEffect(() => {
      const getGames = async () => {
        const getGameItems = await axios.get('https://63a574d52a73744b008e74dc.mockapi.io/Games');
        setGame(getGameItems.data)
      }
    getGames();

    }, [])
    
  return (
    <div className={styles.games}>
      {game.map(game => <GameItem game={game} key={game.id}/>)}
    </div>
  )
}
