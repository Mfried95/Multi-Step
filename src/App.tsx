import { useState } from "react";
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
    <div className="form-container">
      <div className="form-step-container">
        
      </div>
      {steps}
    </div>
   </div>
   
  );
}

export default App;


