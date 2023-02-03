import React from "react";
import "../styles/steptwo.css";

type PlanData = {
  plan: string;
  price: number;
};

type PlanDataFormProps = PlanData & {
  updateFields: (fields: Partial<PlanData>) => void;
};

const steptwo = ({ plan, price, updateFields }: PlanDataFormProps) => {
  return (
    <div>
      <div className="personal-info-container">
        <div className="title">
          <h1>Select Your Plan</h1>
          <p>You have the option of Monthly or Yearly billing.</p>
        </div>
        <div className="plan-selection">
          <section onClick={() => updateFields({ plan: "Arcade", price: +2 })}>
            <h2>Arcade</h2>
          </section>
          <section
            onClick={() => updateFields({ plan: "Advanced", price: +4 })}
          >
            <h2>Advanced</h2>
          </section>
          <section onClick={() => updateFields({ plan: "Pro", price: +6 })}>
            <h2>Pro</h2>
          </section>
        </div>
      </div>
    </div>
  );
};

export default steptwo;
