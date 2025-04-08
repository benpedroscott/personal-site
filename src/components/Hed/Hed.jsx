import React from "react";
import styles from "./Hed.module.scss";

function Hed({ data, children }) {
  const shadow = { color: data.textColor, textShadow: "0px 0px 10px black" };
  const noShadow = { color: data.textColor };

  return (
    <h1 style={data.textShadow ? shadow : noShadow} className={styles.hed}>
      {children}
    </h1>
  );
}

export default Hed;
