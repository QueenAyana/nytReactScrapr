import React from "react";

export const Input = props => {
  return(
    <div className="form-group">
      <input onChange={props.handleInputChange} type="text" className="form-control" value={props.search}></input>
    </div>
  )
};

