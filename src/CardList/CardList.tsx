import React from "react";
import styles from "./cardlist.module.css";
import { Card } from "./Card";

export function CardList() {
  return (
    <ul className={styles.cardList}>
      <Card />
    </ul>
  );
}
