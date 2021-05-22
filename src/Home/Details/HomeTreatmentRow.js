import React from "react";
import "./Details.css";

function HomeTreatmentRow(props) {
  return (
    <div className="blocks">
      <div>
        <img src={props.imgsrc} alt="" />
      </div>
      <div>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default HomeTreatmentRow;
