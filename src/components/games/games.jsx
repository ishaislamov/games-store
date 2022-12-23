import React from 'react';
import { GameItem } from '../game-item';
import { useDispatch, useSelector } from 'react-redux'


const { games } = useSelector((state) =>  )
export const Games = () => {
  return (
    <div>
      <GameItem />
    </div>
  )
}
