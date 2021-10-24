import React from "react";

const Scroll = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};

const styles = {
  container: {
      overflowY: 'scroll',
      height: '800px'
  },
};

export default Scroll;
