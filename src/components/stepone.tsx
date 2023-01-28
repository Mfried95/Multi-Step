import React, { useState } from "react";
import "../styles/stepone.css";


const stepone = () => {
  
  const [personalInfo, setPersonalInfo] = useState({
    email: "",
    name: "",
    number: 0,
  });

  return (
    <div>
      <div className="container">
        <div className="title">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <form action="onSubmit">
          <label htmlFor="Name">Name</label>
          <input type="text" />
          <label htmlFor="Email">Email</label>
          <input type="email" name="" id="" />
          <label htmlFor="Phone Number">Phone Number</label>
          <input type="tel" name="Number" id="" />
        </form>

        <div className="button-wrapper">
          <button>Next</button>
          <button>Back</button>
        </div>
      </div>
    </div>
  );
};

export default stepone;
