import React from "react";
import styles from "./App.module.scss";
import Nav from "./components/Nav/Nav";
import EntryContainer from "./components/EntryContainer/EntryContainer";
import Hed from "./components/Hed/Hed";
import Dek from "./components/Dek/Dek.jsx";
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
                {index != 0 ? (
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
                ) : null}
                {index === 0 ? (
                  <>
                    <Dek data={entry}>
                      I'm a graphics editor for interactives at National
                      Geographic. I make cool things on the web using data, 3D
                      models, illustrations, and code. I'm also an alum from the
                      Missouri School of Journalism, majoring in data
                      journalism.
                    </Dek>
                    <Dek data={entry}>
                      Away from work (and sometimes during), I enjoy reading,
                      painting, and diving down Wikipedia rabbit holes. Based in
                      Philly, from Louisiana.
                    </Dek>
                    <Dek data={entry}>
                      Take a look at my selected work below 👇
                    </Dek>
                  </>
                ) : null}
                {/* {entry.bts ? (
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
                ) : null} */}
              </div>
            </EntryContainer>
          );
        })}
      </section>
    </div>
  );
}

export default App;
