import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styled from "styled-components";
import "./index.css";

function App() {
  const [form, setform] = useState({
    name: "",
    email: "",
    number: "",
  });

  const [page, setPage] = useState(0);

  const renderpage = () => {
    if (page === 0) {
      return stepOne();
    } else if (page === 1) {
      return stepTwo();
    } else {
      return stepThree()
    }
  };


  const stepOne = () => {
    return (
      <>
        <div>
          <button
            onClick={() => {
              setPage(1);
            }}
          >
            Next step
          </button>
          <h2>Step 1</h2>
        </div>
      </>
    );
  };

  const stepTwo = () => {
    return (
      <>
        <button
          onClick={() => {
            setPage(2);
          }}
        >
          Next step
        </button>
        <button
        onClick={() => {
          setPage(0)
        }}
        >back</button>
        <h2>Step 2</h2>
      </>
    );
  };


  const stepThree = () => {
    return (
      <>
      <button>Next</button>
      <button
      onClick={() => {
        setPage(1)
      }}
      >Back</button>
      <h2>Step 3</h2>
      </>
    )
  }


  return (
    <div className="container">
      <FormContainer>
        <StepSelection></StepSelection>
        <FormInfo>{renderpage()}</FormInfo>
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
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  width: 1000px;
  height: 600px;
  border-radius: 1.5em;
  background-color: white;
  display: flex;
  margin: 5% auto;
`;

const FormInfo = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;
