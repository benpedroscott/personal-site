import React from "react";
import styles from "./Nav.module.scss";

function Nav({ entryRefs, data, state }) {
  React.useEffect(() => {}, [state]);

  const handleScrollToPage = (index) => {
    // Call the scrollTo method defined in LandingPage via the ref
    entryRefs[index]?.current?.scrollTo();
  };

  let activeItem = {
    color: data[state].textColor,
    fontWeight: "800",
  };

  let inactiveItem = {
    color: data[state].textColor,
  };

  return (
    <>
      {/* <Hamburger /> */}
      <nav className={styles.main}>
        <div className={styles.list}>
          {data[state].navBg ? <div className={styles.bg}></div> : null}
          <div
            style={{ borderRight: `1px solid ${data[state].textColor}` }}
            className={styles.wrapper}
          >
            <h3
              style={
                data.textColor != "white"
                  ? { color: data[state].textColor }
                  : { color: "white" }
              }
              className={styles.title}
            >
              Navigation
            </h3>

            {data.map((entry, index) => {
              return (
                <button
                  style={state === index ? activeItem : inactiveItem}
                  key={entry.id}
                  onClick={() => handleScrollToPage(index)}
                >
                  {entry.nav_name}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}

function Hamburger() {
  return (
    <button className={styles.hamburger} onClick={console.log("called")}>
      <img src={"src/assets/menu.svg"} />
    </button>
  );
}

export default Nav;
