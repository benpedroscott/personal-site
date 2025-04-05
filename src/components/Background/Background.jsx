import React from "react";
import styles from "./Background.module.scss";

function Background({ children }) {
  return (
    <div className={styles.bg}>
      <div className={styles.bgContainer}>{children}</div>
    </div>
  );
}

export default Background;
