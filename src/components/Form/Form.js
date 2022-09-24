import React from "react";
import ReactDOM from "react-dom";
import MultiStep from "react-multistep";
import { StepOne } from "./step-one";
import { StepTwo } from "./step-two";
import { StepThree } from "./step-three";
import { StepFour } from "./step-four";

import "./prog-track.css";
import "./styles.css";

const steps = [
  { name: "Smoke", component: <StepOne /> },
  { name: "Accident", component: <StepTwo /> },
  { name: "Address", component: <StepThree /> },
  { name: "Submit", component: <StepFour /> }
];

function Form() {
  return (
    <div className="formblock">
      {/* <h1>React multi step</h1> */}
      <MultiStep steps={steps} />
    </div>
  );
}

export default Form