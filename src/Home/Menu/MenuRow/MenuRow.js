import React from "react";
import "./MenuRow.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function MenuRow(props) {
  return (
    <div className="menuRow">
      <div className="menuRow-1">
        <img src={props.imgsrc} alt="" />
      </div>
      <div className="menuRow-2">
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
      <div className="menuRow-3">
        <ArrowForwardIosIcon fontSize="small" id="arrow" />
      </div>
    </div>
  );
}
 
export default MenuRow;
