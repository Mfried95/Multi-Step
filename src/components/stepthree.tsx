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
  return (
    <div>
      <div className="personal-info-container">
        <div className="title">
          <h1>Pick add-ons</h1>
          <p>Add-ons help enchance your gaming experience.</p>
        </div>
        <div className="addons">
          <div className="choice">
            <input
              type="checkbox"
              onChange={() =>
                updateFields({
                  online: 1,
                })
              }
            />
            <label htmlFor="checkbox">Online serivce</label>
          </div>
          <div className="choice">
            <input
              type="checkbox"
              onChange={() =>
                updateFields({
                  storage: 2,
                })
              }
            />
          </div>
          <div className="choice">
            <input
              type="checkbox"
              onChange={() =>
                updateFields({
                  custom: 1,
                })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default stepthree;
