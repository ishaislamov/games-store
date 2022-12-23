import React from "react";
import styles from "./Header.module.scss";

import { ContentWrapper } from "../content-wrapper/ContentWrapper";
import { CartBlock } from "../cart-block";

export const Header = () => {
  return (
    <div className={styles.header}>
      <ContentWrapper className={styles.content}>
        <div className={styles.title}>Games Store</div>
        <CartBlock className={styles.cartblock} />
      </ContentWrapper>
    </div>
  );
};
