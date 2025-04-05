import React from "react";
import styles from "./App.module.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import Nav from "./components/Nav/Nav";
import EntryContainer from "./components/EntryContainer/EntryContainer";
import Hed from "./components/Hed/Hed";
import Dek from "./components/Dek/Dek";
import { data } from "./data.js";
import Background from "./components/Background/Background";

function App() {
  const entryRefs = data.map(() => React.useRef());

  return (
    <div className={styles.root}>
      <Nav entryRefs={entryRefs} data={data} />
      <section className={styles.main}>
        {data.map((entry, index) => {
          return (
            <EntryContainer key={entry.id} ref={entryRefs[index]} data={entry}>
              <Background />
              <Hed>{entry.hed}</Hed>
            </EntryContainer>
          );
        })}
      </section>
    </div>
  );
}

export default App;
