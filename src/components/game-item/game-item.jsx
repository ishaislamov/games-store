import React from 'react';
import styles from './styles.module.scss'

export const GameItem  = ({
    title = '',
    price = 0,
    img = '',
    id = '',
    desc = '',
    tag =[]
}) => {
  return (
    <>
    <div className={styles.game}>
        <div className={styles.gameImg}>
            <img src={img} alt="" />
        </div>
        <h2 className={styles.gameTitle}>{title}</h2>
        <ul className={styles.gameTags}>
            <li className={styles.gameTag}>{tag}</li>
        </ul>
        <span className={styles.gamePrice}>{price}</span>
        <button className={styles.gameCart}>В корзину</button>
    </div>
    </>
)
}
