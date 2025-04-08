import React from "react";
import styles from "./Hed.module.scss";

function Hed({ data, children }) {
  return (
    <h1 style={{ color: data.textColor }} className={styles.hed}>
      {children}
    </h1>
  );
}

export default Hed;
