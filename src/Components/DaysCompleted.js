import React from "react";
import PropTypes from "prop-types";
import Tile from "./Tile";
import Histogram from "./Histogram";

function DaysCompleted(props) {
  console.log(props);

  const { days } = props;

  const textStyle = {textAlign: 'center', color: '#BC9CFF'}

  return (
   
      <Tile>
        <h2 style={textStyle}> {days} Days Completed! </h2>

        <Histogram />
        
      </Tile>

  );
}

DaysCompleted.propTypes = {
  days: PropTypes.number
};

DaysCompleted.defaultProps = {
  days: 0
};

export default DaysCompleted;
