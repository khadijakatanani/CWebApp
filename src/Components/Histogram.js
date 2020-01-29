import React from "react";
import PropTypes from "prop-types";

function Bar(props) {
  const { percentage } = props;
  const barStyle = {
    background:
      "linear-gradient(180deg, rgba(56,149,95,.25), rgba(102,210,234,.25))",
    width: "30px",
    height: "70.74px",
    borderRadius: "2px",
    display: "flex",
    alignItems: "flex-end"
  };

  const innerBar = {
    background:
      "linear-gradient(180deg, rgba(56,149,95,1), rgba(102,210,234,0.5))",
    opacity: "100 !important",
    height: `${percentage}%`,
    width: "100%",
    borderRadius: "2px"
  };

  return (
    <div style={barStyle}>
      <div style={innerBar}></div>
    </div>
  );
}

Bar.propTypes = {
  percentage: PropTypes.number.isRequired
};

function Histogram(props) {




  const divStyle = {
    display: "flex",
    justifyContent: "space-around"
  };


  return (
    <div style={divStyle}>

       {/** I am a comment in JSX. We will need to loop here based on teh number of bars passed in */}
       {/** I am think bars can be a percentage value 0-100 e.g. [0,10,100] */}
      <Bar percentage={80} />
    </div>
  );
}

Histogram.propTypes = {
  bars: PropTypes.array.isRequired
};

export default Histogram;
