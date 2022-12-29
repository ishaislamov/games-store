import React, { useState } from 'react';
import styles from './styles.module.scss'
import axios from 'axios';
import { Button } from '../button/button';

export const GameItem  = ({ game }) => {
const onClick = () => {
    return
}
  return (
    <>
    <div className={styles.game}>
        <div className={styles.gameImg}>
            <img className={styles.gameImg} src={game.image} alt="" />
        </div>
        <h2 className={styles.gameTitle}>{game.title}</h2>
        <div className={styles.gameTags}>
            {game.genres.map(g => (
                    <span className={styles.gameTag}>{g}</span>
            ))}
        </div>
        <div className={styles.gameBuy}>
            <span className={styles.gamePrice}>{game.price}</span>
            <div className={styles.gameCart}>
            </div>
        </div>
    </div>
    </>
)
}
