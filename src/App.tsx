import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styled from "styled-components";
import "./index.css";

function App() {

  const [form, setform] = useState({
    name: '',
    email: '',
    number: '',
    step: 1,
    plan: NaN,
    addon: '',
    summary: ''
  })

  return (
    <div className="App">
      <FormContainer>
        <StepSelection>
          <div className="steps"></div>
        </StepSelection>
        <FormInfo>
          
        </FormInfo>
      </FormContainer>
    </div>
  );
}

export default App;



const StepSelection = styled.div`
  background-image: url("../src/assets/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  border-radius: 1em;
  height: 100%;
  width: 400px;
  margin: 20px;
  padding: 10px;
`;

const FormContainer = styled.div`
  width: 1000px;
  height: 600px;
  border-radius: 1.5em;
  background-color: blue;
  display: flex;
  margin: 5% auto;
`;

const FormInfo = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;
`