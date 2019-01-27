import React from "react";

export const Button = props => {
  return(
    <button onClick={props.handleButtonClick} style={{ float: "left", marginBottom: 10, marginTop: 7 }} className="btn btn-dark">Search</button>
  )
};

