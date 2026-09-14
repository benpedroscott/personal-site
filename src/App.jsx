import React from "react";
import styles from "./App.module.scss";
import Nav from "./components/Nav/Nav";
import EntryContainer from "./components/EntryContainer/EntryContainer";
import Hed from "./components/Hed/Hed";
import Dek from "./components/Dek/Dek.jsx";
import { data } from "./data.js";
import Background from "./components/Background/Background";
import BehindTheScenes from "./components/BehindTheScenes/BehindTheScenes";

const medalClassByType = {
  gold: "goldMedal",
  silver: "silverMedal",
  bronze: "bronzeMedal",
  "award of excellence/other": "otherMedal",
};

function MedalRow({ medals = [], data }) {
  if (!medals.length) return null;

  const shadowStyle = data.textShadow ? { textShadow: "0px 0px 8px black" } : {};

  return (
    <div className={styles.medalRow}>
      {medals.map((medal, index) => {
        const medalType = (medal.type || "other").toLowerCase();
        const medalClass = styles[medalClassByType[medalType] || "otherMedal"];
        const medalEntries = Array.isArray(medal.entries)
          ? medal.entries
              .flatMap((item) => String(item).split(","))
              .map((item) => item.trim())
              .filter(Boolean)
          : [];

        if (!medalEntries.length) {
          return null;
        }

        return medalEntries.map((entryName, entryIndex) => (
          <div
            key={`${medal.type || "medal"}-${index}-${entryIndex}`}
            className={styles.medalItem}
          >
            <span
              className={`${styles.medalIcon} ${medalClass}`}
              aria-label={medal.type}
            ></span>
            <span
              className={styles.medalTooltip}
              style={{ color: data.textColor, ...shadowStyle }}
            >
              {entryName}
            </span>
          </div>
        ));
      })}
    </div>
  );
}

function App() {
  const entryRefs = data.map(() => React.useRef());
  const [state, setState] = React.useState(0);
  const [isBtsOpen, setIsBtsOpen] = React.useState(false);
  const [activeBtsEntry, setActiveBtsEntry] = React.useState(null);

  const openBehindTheScenes = (entry) => {
    setActiveBtsEntry(entry);
    setIsBtsOpen(true);
  };

  const closeBehindTheScenes = () => {
    setIsBtsOpen(false);
    setActiveBtsEntry(null);
  };

  return (
    <div className={styles.root}>
      <div className={`${styles.panTrack} ${isBtsOpen ? styles.panTrackOpen : ""}`}>
        <div className={styles.mainPane}>
          <Nav entryRefs={entryRefs} data={data} state={state} />

          <section className={`${styles.main} ${isBtsOpen ? styles.mainNoSnap : ""}`}>
            {data.map((entry, index) => {
              const assetUrl = "/assets/" + entry.asset;

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
                    {entry.bg === "video"  ? (
                      <video
                        src={assetUrl}
                        autoPlay
                        loop
                      ></video>
                    ) : entry.bg === "image" ? (
                      <img src={assetUrl}></img>
                    ) : null}
                  </Background>
                  <div className={styles.hedContainer}>
                    <MedalRow medals={entry.medals} data={entry} />
                    <Hed data={entry}>{entry.hed}</Hed>
                    {index != 0 ? (
                      <div className={styles.linkButtons}>
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
                        {entry.bts && entry.bts_content ? (
                          <button
                            style={{
                              border: `1px solid ${entry.textColor}`,
                              color: entry.textColor,
                            }}
                            className={styles.btsButton}
                            onClick={() => openBehindTheScenes(entry)}
                          >
                            Behind the scenes
                          </button>
                        ) : null}
                      </div>
                    ) : null}
                    {index === 0 ? (
                      <>
                        <Dek data={entry}>
                          I'm a senior interactives editor at National
                          Geographic. I tell stories with data, 3D
                          models, illustrations, and code. I'm also an alum from the
                          Missouri School of Journalism, majoring in data
                          journalism.
                        </Dek>
                        <Dek data={entry}>
                          Away from work (and sometimes during), I enjoy reading,
                          writing, and diving down Wikipedia rabbit holes. Based in
                          D.C., from Louisiana.
                        </Dek>
                        <Dek data={entry}>
                          Take a look at my selected work below.
                        </Dek>
                      </>
                    ) : null}
                  </div>
                </EntryContainer>
              );
            })}
          </section>
        </div>

        <BehindTheScenes entry={activeBtsEntry} onClose={closeBehindTheScenes} />
      </div>
    </div>
  );
}

export default App;
