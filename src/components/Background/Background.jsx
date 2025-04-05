import React from "react";
import styles from "./Background.module.scss";

function Background({ children }) {
  return (
    <div className={styles.bg}>
      {children}
    </div>
  );
}

export default Background;
