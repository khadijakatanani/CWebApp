import React from "react";
import PropTypes from "prop-types";
import Tile from "./Tile";
import Histogram from "./Histogram";
import ProgressBar from "./ProgressBar";
import styled from 'styled-components';

function DaysCompleted(props) {

  const { days, checkins } = props;

  const DaysCompleteHeading = styled.h2`
   text-align: center;
   color: #BC9CFF;
  `;
  
  const textStyle = {textAlign: 'center', color: '#BC9CFF'}
  

  const divStyle = {
   
    display: 'grid',
    gridTemplateColumns: '.8fr',
    'grid-template-rows': '55px 80px 20px auto',

    justifyContent: 'center',

  }

  return (
   
      <Tile>
        <div style={divStyle} id="wrapper">
          
          <DaysCompleteHeading>  {days} Days Completed!    </DaysCompleteHeading>
          
          <Histogram barCount={7} bars={checkins.map(c => c.score * 5)} />   
          <ProgressBar />
          <h4 style={{color:'#1F2041'}}> <strong>50%</strong>  TO GOAL!</h4>

        </div>
    
       
      </Tile>

  );
}

DaysCompleted.propTypes = {
  days: PropTypes.number,
  checkins: PropTypes.array.isRequired
};

DaysCompleted.defaultProps = {
  days: 0,
};

export default DaysCompleted;