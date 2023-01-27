import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styled from "styled-components";
import "./index.css";
import StepOne from "./components/stepone";
import StepTwo from "./components/steptwo";
import StepThree from "./components/stepthree";
import StepFour from "./components/stepfour";
import { useMultistepForm } from "./useMultistepForm";

function App() {
  const [form, setform] = useState({
    name: "",
    email: "",
    number: "",
  });

  const {steps, currentStepIndex, next, back} = useMultistepForm([<StepOne/>, <StepTwo/>, <StepThree/>, <StepFour/>])

  return (
   <div>
    {currentStepIndex + 1} / 0
    {steps}
    <div>
    {currentStepIndex !== 0 && <button type="button" onClick={back}>Back</button>}
    <button type="button" onClick={next}>Next</button>
    </div>
   </div>
   
  );
}

export default App;


