import React from "react";
import "./Details.css";
import HomeTreatmentRow from "./HomeTreatmentRow";
import db from "../../firebase.js";
import firebase from "firebase";

function Details() {
  return (
    <div className="details">
      <div className="header">
        <p>HOME TREATMENT</p>
        <p id="disclaimer">
          Disclaimer - This Clinical Guidance (“Guidance”) is provided for
          informational and educational purposes only. Please consult a doctor
          before following any of these stuffs.
        </p>
      </div>
      <div className="details-body self">
        <HomeTreatmentRow
          desc="Self Isolation is Mandatory"
          imgsrc={require("../Menu/MenuRow/Images/selfisolation.jpeg").default}
        />
        <HomeTreatmentRow
          desc="The room must be well ventilated and after using any equipment
          sanitize it."
          imgsrc={require("../Menu/MenuRow/Images/ventilated.jpeg").default}
        />
        <HomeTreatmentRow
          desc="You must be well hydrated. So drink lots of water."
          imgsrc={require("../Menu/MenuRow/Images/water.jpeg").default}
        />
        <br />
        <h3>MEDICAL EQUIPMENTS REQUIRED</h3>
        <HomeTreatmentRow
          desc="Oximeter"
          imgsrc={require("../Menu/MenuRow/Images/oximeter.jpeg").default}
        />
        <HomeTreatmentRow
          desc="Thermometer"
          imgsrc={require("../Menu/MenuRow/Images/thermometer.jpeg").default}
        />
        <HomeTreatmentRow
          desc="Nasal Cannula."
          imgsrc={require("../Menu/MenuRow/Images/nasalcannula.png").default}
        />
        <HomeTreatmentRow
          desc="Spacer."
          imgsrc={require("../Menu/MenuRow/Images/spacer.jpeg").default}
        />
        <br />
        <br />
        <h3>OTHER IMPORTANT STUFFS REQUIRED</h3>
        <ul>
          <li>Gloves</li>
          <li>Mask</li>
          <li>Hand Sanitizer</li>
          <li>Disposal Bags</li>
        </ul>
        <br />
        <h3>
          TRACK YOUR OXYGEN SATURATION, PULSE AND TEMPERATURE EVERY 6 HOURS
        </h3>
        <ul>
          <li>If Oxygen Saturation &gt; 94% (No need for hospitalization)</li>
          <li>
            If Oxygen Saturation is &gt; 92% &lt; 94% (Moniter oxygen level
            every 4 hours)
          </li>
          <li>If Oxygen Saturation is &lt; 92%</li>
          <ul>
            <li>
              If hospital beds are available then the patient can be moved
            </li>
            <HomeTreatmentRow
              desc="Sleep in Prone Position"
              imgsrc={require("../Menu/MenuRow/Images/prone.png").default}
            />
            <li>Passive Leg movements for blood circulation</li>
          </ul>
          <br />
          <h3>
            MEDICINES REQUIRED -{" "}
            <span className="span">
              Consult a doctor before taking them since they have undesired side
              effects depending upon your health condition. Take at your own
              risk.
            </span>
          </h3>
          <HomeTreatmentRow
            desc="Dexamethasone 6mg/day."
            imgsrc={
              require("../Menu/MenuRow/Images/dexamethasone.jpeg").default
            }
          />
          <HomeTreatmentRow
            desc="Prednisone 40mg."
            imgsrc={require("../Menu/MenuRow/Images/prednisone.jpeg").default}
          />
          <HomeTreatmentRow
            desc="MethylPrednisolone 30mg."
            imgsrc={
              require("../Menu/MenuRow/Images/methylprednisolone.jpeg").default
            }
          />
          <HomeTreatmentRow
            desc="Budesonide. 800MCG twice daily through spacer."
            imgsrc={require("../Menu/MenuRow/Images/budesonide.jpeg").default}
          />
          <HomeTreatmentRow
            desc="Paracetamol. Take 1g every 6 to 8 hours if you have fewer."
            imgsrc={require("../Menu/MenuRow/Images/paracetamol.jpeg").default}
          />
          <HomeTreatmentRow
            desc="Oxygen cylinder. Start slow(2 to 4 litres/minute using nasal cannula after that mask is required. You
                may use the mask at the beginning also). Scale it to 6 ltr/min if required to maintain oxygen saturation > 92%.
                "
            imgsrc={
              require("../Menu/MenuRow/Images/oxygencylinder.jpeg").default
            }
          />

          <li>If Oxygen Saturation is &lt; 90%</li>
          <ul>
            <li>Hospital Beds are Required.</li>
            <li>
              If Beds are not available then carry out the same medicine as
              mentioned above.
            </li>
            <li>
              Oxygen flow rate can be increased from 6 litres/minute to 10
              litre/minute
            </li>
            <li>Sleep in prone position(stomach down)</li>
          </ul>
          <br />
          <br />
        </ul>
        <div className="">
          <h3>INDICATION OF IMPROVEMENTS</h3>
          <ul>
            <li>Respiratory Rate &lt; 24/minute</li>
            <li>Saturation &gt; 92% to 96%</li>
            <li>Patient does not feel breathless</li>
          </ul>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Details;
