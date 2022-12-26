import React, { useState } from 'react';
import styles from './styles.module.scss'
import axios from 'axios';

export const GameItem  = ({ game }) => {

  return (
    <>
    <div className={styles.game}>
        <div className={styles.gameImg}>
            <img className={styles.gameImg} src={game.image} alt="" />
        </div>
        <h2 className={styles.gameTitle}>{game.title}</h2>
        <ul className={styles.gameTags}>
            <li className={styles.gameTag}>{game.genres}</li>
        </ul>
        <div className={styles.gameBuy}>
            <span className={styles.gamePrice}>{game.price}</span>
            <button className={styles.gameCart}>В корзину</button>
        </div>
    </div>
    </>
)
}
