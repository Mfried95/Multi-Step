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
  const [online, setOnline] = useState(false);
  const [storage, setStorage] = useState(false);
  const [custom, setCustom] = useState(false);

  return (
    <div>
      <div className="personal-info-container">
        <div className="title">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enchance your gaming experience.</p>
        </div>

        <div className="addons">
          <div
            style={{
              border: !online ? "solid blue 1px" : "solid black 2px",
            }}
            className="choice online"
            onClick={(e) => {
              {
                setOnline(true || false);
              }
              e.preventDefault();
              updateFields({ online: 10 });
            }}
          >
            <div className="addon-content">
              <div>
                <h2>Online Service</h2>
                <p>Access to multiplayer games</p>
              </div>

              <div>
                <span>+$10/yr</span>
              </div>
            </div>
          </div>
          <div
            className="choice storage"
            onClick={(e) => {
              {
                setStorage(true);
              }
              e.preventDefault();
              updateFields({ storage: 20 });
            }}
            style={{
              border: !storage ? "solid blue 1px" : "solid black 2px",
            }}
          >
            <div className="addon-content">
              <div>
                <h2>Larger storage</h2>
                <p>Extra 1TB of cloud save</p>
              </div>

              <div>
                <span>+$20/yr</span>
              </div>
            </div>
          </div>
          <div
            className="choice custom"
            onClick={(e) => {
              {
                setCustom(true);
              }
              e.preventDefault();
              updateFields({ custom: 20 });
            }}
            style={{
              border: !custom ? "solid blue 1px" : "solid black 2px",
            }}
          >
            <div className="addon-content">
              <div>
                <h2>Customizable profile</h2>
                <p>Custom theme on your profile</p>
              </div>

              <div>
                <span>+$20/yr</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default stepthree;
