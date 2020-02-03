import React from "react";
import PropTypes from "prop-types";
import Tile from "./Tile";
import Histogram from "./Histogram";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";

function DaysCompleted(props) {
  const { days, checkins } = props;

  const DaysCompleteHeading = styled.h2`
    text-align: center;
    color: #bc9cff;
  `;

  const RootDiv = styled.div`
    display: grid;
    grid-template-columns: 0.8fr;
    grid-template-rows: 55px 80px 20px auto;
    justify-content: center;
  `;

  const GoalHeading = styled.h4`
    color: #1f2041;
  `;
  
  return (
    <Tile>
      <RootDiv>
        <DaysCompleteHeading> {days} Days Completed! </DaysCompleteHeading>
        <Histogram barCount={7} bars={checkins.map(c => c.score * 5)} />
        <ProgressBar />
        <GoalHeading>
          <strong>50%</strong> TO GOAL!
        </GoalHeading>
      </RootDiv>
    </Tile>
  );
}

DaysCompleted.propTypes = {
  days: PropTypes.number,
  checkins: PropTypes.array.isRequired
};

DaysCompleted.defaultProps = {
  days: 0
};

export default DaysCompleted;
