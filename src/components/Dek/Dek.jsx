import React from "react";
import styles from "./Dek.module.scss";

function Dek({ children }) {
  return <p className={styles.dek}>{children}</p>;
}

export default Dek;
