import React from "react";

const Scroll = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};

const styles = {
  container: {
      overflowY: 'scroll',
      borderTop: '5px solid black',
      height: '800px'
  },
};

export default Scroll;
