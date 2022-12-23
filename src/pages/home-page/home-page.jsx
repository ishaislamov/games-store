import React from "react";
import { GameItem } from "../../components/game-item/game-item";
import { Header } from "../../components/header";
import { Games } from '../../components/games'
import { ContentWrapper } from '../../components/content-wrapper'
import styles from "./styles.module.scss";


export const HomePage = () => {
  return (
    <>
      <ContentWrapper className={styles.content}>
        <Header />
        <Games />
      </ContentWrapper>
    </>
  );
};
