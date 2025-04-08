import React from "react";
import styles from "./Background.module.scss";

function Background({ data, children }) {
  return (
    <div
      style={data.bgColor ? { backgroundColor: data.bgColor } : null}
      className={styles.bg}
    >
      {children}
    </div>
  );
}

export default Background;
