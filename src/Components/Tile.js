import React from "react";
import PropTypes from "prop-types";

function Tile(props) {
  const { children, elevation } = props;
  const divStyle = {
    boxShadow: `40px 10px 20px rgba(31, 32, 32, ${elevation})`,
    padding: "3%"
  };

  return <div style={divStyle}>{children}</div>;
}

Tile.propTypes = {
  elevation: PropTypes.string
};

Tile.defaultProps = {
  elevation: "0.05"
};

export default Tile;
