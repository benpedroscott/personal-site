import React from "react";
import Hed from "../Hed/Hed";
import Dek from "../Dek/Dek";
import styles from "./EntryContainer.module.scss";
import { useInView } from "react-intersection-observer";

const EntryContainer = React.forwardRef((props, ref) => {
  const entryContainerRef = React.useRef();

  // if intersecting, set state to index taken from map function.
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
  });

  const setRefs = React.useCallback(
    (node) => {
      entryContainerRef.current = node;
      inViewRef(node);
    },
    [inViewRef],
  );

  React.useEffect(() => {
    console.log(inView);
    if (inView) {
      let newState = props.index;
      props.setState(newState);
      console.log(newState);
    }
  }, [inView, props]);

  React.useImperativeHandle(ref, () => ({
    scrollTo: () => {
      // Example method: scroll the landing page into view
      entryContainerRef.current.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <section ref={setRefs} className={styles.root}>
      {props.children}
    </section>
  );
});

export default EntryContainer;
