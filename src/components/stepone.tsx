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
      <div className="personal-info-container">
        <div className="title">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

    <div className="step">
      <form action="onSubmit">
          <label htmlFor="Name">Name</label>
          <input type="text" required />
          <label htmlFor="Email">Email Address</label>
          <input type="email" name="" id="" />
          <label htmlFor="Phone Number">Phone Number</label>
          <input type="tel" name="Number" id="" />
        </form>
      </div>
        
      </div>
    </div>
  );
};

export default stepone;
