import React from "react";
import styles from "./metadata.modules.css";

export function MetaData() {
  return (
    <div className={styles.metaData}>
      <div className={styles.userLink}>
        <img className={styles.avatar} src="" alt="avatar" />
        <a href="#user-url" className={styles.userName}>
          Дмитрий
        </a>
      </div>
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано</span> 4 часа назад
      </span>
    </div>
  );
}
