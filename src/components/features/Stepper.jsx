import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const CLMTEStepper = ({ index, steps, style }) => {
  return (
    <div style={{ width: "100%", margin: 0 }}>
      <Stepper activeStep={index} style={{ ...style }}>
        {steps.map((label) => (
          <Step step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default CLMTEStepper;
