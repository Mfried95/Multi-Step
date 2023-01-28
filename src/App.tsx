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

  const { steps, currentStepIndex, next, back } = useMultistepForm([
    <StepOne />,
    <StepTwo />,
    <StepThree />,
    <StepFour />,
  ]);

  return (
    <div>
      <div className="form-container">
        <div className="count-container">
          <div className="form-step-count">
            <div className="form-count">
              <div
                className="circle"
                style={{
                  backgroundColor: currentStepIndex == 0 ? "hsl(228, 100%, 84%)" : "none",
                }}
              >
                <div className="number">1</div>
              </div>
              <div className="count container">
                <h2>Step 1</h2>
                <p>YOUR INFO</p>
              </div>
            </div>

            <div className="form-count">
              <div
                className="circle"
                style={{
                  backgroundColor: currentStepIndex == 1 ? "hsl(228, 100%, 84%)" : "none",
                }}
              >
                <div className="number">2</div>
              </div>
              <div className="count container">
                <h2>Step 2</h2>
                <p>Select Plan</p>
              </div>
            </div>

            <div className="form-count">
              <div
                className="circle"
                style={{
                  backgroundColor: currentStepIndex == 2 ? "hsl(228, 100%, 84%)" : "none",
                }}
              >
                <div className="number">3</div>
              </div>
              <div className="count container">
                <h2>Step 3</h2>
                <p>Add-ons</p>
              </div>
            </div>

            <div className="form-count">
              <div
                className="circle"
                style={{
                  backgroundColor: currentStepIndex === 3 ? "hsl(228, 100%, 84%)" : "none",
                }}
              >
                <div className="number">4</div>
              </div>
              <div className="count container">
                <h2>Step 4</h2>
                <p>Summary</p>
              </div>
            </div>
          </div>
        </div>
        <div className="step-container">{steps}</div>
      </div>
    </div>
  );
}

export default App;
