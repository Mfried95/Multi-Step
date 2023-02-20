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

const StepThree = ({ updateFields }: AddonsDataFormProps) => {
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
              border: online ? "solid black 2px" : "solid blue 1px",
            }}
            className="choice online"
            onClick={() => {
              setOnline(!online);
              updateFields({ online: online ? 0 : 1 });
            }}
          >
            <div className="addon-content">
              <div>
                <h2>Online Service</h2>
                <p>Access to multiplayer games</p>
              </div>

              <div>
                <span>+$1/mo</span>
              </div>
            </div>
          </div>
          <div
            className="choice storage"
            onClick={() => {
              setStorage(!storage);
              updateFields({ storage: storage ? 0 : 2 });
            }}
            style={{
              border: storage ? "solid black 2px" : "solid blue 1px",
            }}
          >
            <div className="addon-content">
              <div>
                <h2>Larger storage</h2>
                <p>Extra 1TB of cloud save</p>
              </div>

              <div>
                <span>+$2/mo</span>
              </div>
            </div>
          </div>
          <div
            className="choice custom"
            onClick={() => {

              setCustom(!custom);
              updateFields({ custom: custom ? 0 : 2 });
            }}
            style={{
              border: custom ? "solid black 2px" : "solid blue 1px",
            }}
          >
            <div className="addon-content">
              <div>
                <h2>Customizable profile</h2>
                <p>Custom theme on your profile</p>
              </div>

              <div>
                <span>+$2/mo </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
