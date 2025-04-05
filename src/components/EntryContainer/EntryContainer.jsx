import React from "react";
import Hed from "../Hed/Hed";
import Dek from "../Dek/Dek";
import styles from "./EntryContainer.module.scss";

const EntryContainer = React.forwardRef((props, ref) => {
  const entryContainerRef = React.useRef();

  React.useImperativeHandle(ref, () => ({
    scrollTo: () => {
      // Example method: scroll the landing page into view
      entryContainerRef.current.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <section ref={entryContainerRef} className={styles.root}>
      {props.children}
    </section>
  );
});

export default EntryContainer;
