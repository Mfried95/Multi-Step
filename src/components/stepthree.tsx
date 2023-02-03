import React from "react";
import "../styles/stepthree.css";

type AddonsData = {
  addons: number
};

type AddonsDataFormProps = AddonsData & {
  updateFields: (fields: Partial<AddonsData>) => void;
};


const stepthree = ({addons, updateFields}: AddonsDataFormProps ) => {
  return (
    <div>
      <div className="personal-info-container">
        <div className="title">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enchance your gaming experience.</p>
        </div>
        <div className="addons">
          <div className="choice">
            <input type="checkbox" onChange={() => updateFields({
              addons: +2
            })} />
            <label htmlFor="checkbox">Online serivce</label>
          </div>
          <div className="choice">
            <input type="checkbox" onChange={() => updateFields({
              addons: +3
            })} />
          </div>
          <div className="choice">
            <input type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default stepthree;
