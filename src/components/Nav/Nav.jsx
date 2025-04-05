import React from "react";
import styles from "./Nav.module.scss";

function Nav({ entryRefs, data }) {
  const handleScrollToPage = (index) => {
    // Call the scrollTo method defined in LandingPage via the ref
    entryRefs[index]?.current?.scrollTo();
  };

  return (
    <nav className={styles.main}>
      <div className={styles.list}>
      <div className={styles.bg}></div>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>Navigation</h3>

          {data.map((entry, index) => {
            return (
              <button key={entry.id} onClick={() => handleScrollToPage(index)}>
                {entry.nav_name}
              </button>
            );
          })}
        </div>

      </div>
    </nav>
  );
}

export default Nav;
