import React from "react";
import Hed from "../Hed/Hed";
import Dek from "../Dek/Dek";
import styles from "./LandingPage.module.scss";

function LandingPage() {
  return (
    <section className={styles.root}>
      <Hed>Ben Scott</Hed>

      <Dek>
        I'm a graphics editor for interactives at National Geographic. I make
        cool things on the web using data, 3D models, illustrations, and code.
        I'm also an alum from the Missouri School of Journalism, majoring in
        data journalism.
      </Dek>
    </section>
  );
}

export default LandingPage;
