import React from "react";
import styles from "./App.module.scss";
import LandingPage from "./components/LandingPage/LandingPage";
import Nav from "./components/Nav/Nav";
import EntryContainer from "./components/EntryContainer/EntryContainer";
import Hed from "./components/Hed/Hed";
import { data } from "./data.js";
import Background from "./components/Background/Background";

function App() {
  const entryRefs = data.map(() => React.useRef());
  const [state, setState] = React.useState(0);

  return (
    <div className={styles.root}>
      <Nav entryRefs={entryRefs} data={data} state={state} />

      <section className={styles.main}>
        {data.map((entry, index) => {
          return (
            <EntryContainer
              key={entry.id}
              ref={entryRefs[index]}
              data={entry}
              state={state}
              setState={setState}
              index={index}
            >
              <Background data={entry}>
                {entry.bg === "video" ? (
                  <video
                    src={`src/assets/${entry.asset}`}
                    autoPlay
                    loop
                  ></video>
                ) : entry.bg === "image" ? (
                  <img src={`src/assets/${entry.asset}`}></img>
                ) : null}
              </Background>
              <div className={styles.hedContainer}>
                <Hed data={entry}>{entry.hed}</Hed>
                <button
                  style={{
                    border: `1px solid ${entry.textColor}`,
                    color: entry.textColor,
                  }}
                  className={styles.storyButton}
                  onClick={() => {
                    window.location.href = entry.link;
                  }}
                >
                  Read the story
                </button>
                {entry.bts ? (
                  <button
                    style={{
                      border: `1px solid ${entry.textColor}`,
                      color: entry.textColor,
                    }}
                    className={styles.storyButton}
                    onClick={() => {
                      console.log("clicked");
                    }}
                  >
                    Behind the scenes
                  </button>
                ) : null}
              </div>
            </EntryContainer>
          );
        })}
      </section>
    </div>
  );
}

export default App;
