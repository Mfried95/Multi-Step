import React from 'react'

const steptwo = () => {

  type planData = {
    plan: string
  };
  
  type PlanFormProps = planData & {
    updateFields: (fields: Partial<planData>) => void;
  };
  

  return (
    <div>
      <div className="personal-info-container">
        <div className="title">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
        
      </div>
    </div>
  )
}

export default steptwo