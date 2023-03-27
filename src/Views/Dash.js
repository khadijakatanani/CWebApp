import React from "react";


const Dash = (props) => {
    const { checkins } = props;

    return(
        <div>
            <h1> Dash</h1>
        </div>
    )
}

Dash.propTypes = {
    checkins: PropTypes.array.isRequired
  };
  
Dash.defaultProps = {
    days: 0
  };
  
export default Dash;