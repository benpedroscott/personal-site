import React from "react";
import styles from "./Hed.module.scss";

function Hed({ children }) {
  return <h1 className={styles.hed}>{children}</h1>;
}

export default Hed;
