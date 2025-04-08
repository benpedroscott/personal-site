import React from "react";
import styles from "./Dek.module.scss";

function Dek({ data, children }) {
  return (
    <p style={{ color: data.textColor }} className={styles.dek}>
      {children}
    </p>
  );
}

export default Dek;
