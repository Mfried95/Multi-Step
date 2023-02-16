import { useState } from "react";
import "../styles/stepthree.css";

type AddonsData = {
  online: number;
  storage: number;
  custom: number;
};

type AddonsDataFormProps = AddonsData & {
  updateFields: (fields: Partial<AddonsData>) => void;
};

const stepthree = ({ updateFields }: AddonsDataFormProps) => {

  const [online, setOnline] = useState(false)
  const [storage, setStorage] = useState(false)
  const [custom, setCustom] = useState(false)

  return (
    <div>
      <div className="personal-info-container">
        <div className="title">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enchance your gaming experience.</p>
        </div>

        <div className="addons">
          <button
          style={{
            border: !online? 'solid blue 1px' : 'solid black 2px'
          }}
            className="choice online"
            onClick={(e) => {
              {setOnline(true)}
              e.preventDefault()
              updateFields({ online: 1 });
            }}
          ></button>
          <button
            className="choice storage"
            onClick={(e) => {
              {setStorage(true)}
              e.preventDefault()
              updateFields({ storage: 1 });
            }}
           style={{
              border: !storage? 'solid blue 1px' : 'solid black 2px'
            }}
          ></button>
          <button
            className="choice custom"
            onClick={(e) => {
              {setCustom(true)}
              e.preventDefault()
              updateFields({ custom: 1 });
            }}
            style={{
              border: !custom? 'solid blue 1px' : 'solid black 2px'
            }}
          ></button>
        </div>
      </div>
    </div>
  );
};

export default stepthree;
