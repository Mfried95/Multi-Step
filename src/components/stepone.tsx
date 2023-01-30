import React, { useState } from "react";
import "../styles/stepone.css";

type UserData = {
  name: string;
  email: string;
  phone: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const stepone = ({ name, email, phone, updateFields }: UserFormProps) => {
  return (
    <div>
      <div className="personal-info-container">
        <div className="title">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <div className="step">
          <div className="form-wrapper">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              required
              onChange={(e) =>
                updateFields({
                  name: e.target.value,
                })
              }
            />
            <label htmlFor="Email">Email Address</label>
            <input
              type="email"
              name=""
              required
              id=""
              value={email}
              onChange={(e) =>
                updateFields({
                  email: e.target.value,
                })
              }
            />
            <label htmlFor="Phone Number">Phone Number</label>
            <input
              type="tel"
              name="Number"
              required
              id=""
              value={phone}
              onChange={(e) =>
                updateFields({
                  phone: e.target.value,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default stepone;
