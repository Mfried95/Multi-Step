import "../styles/stepfour.css"

type SummaryData = {
  name: "",
  email: "",
  phone: "",
  plan: "",
  price: 0,
  online: 0,
  storage: 0,
  custom: 0,
  total: 0,
};

interface SummaryDataFormProps extends SummaryData {
  updateFields: (fields: Partial<SummaryData>) => void;
}

const stepfour = ( FinalData: any, {updateFields}: SummaryDataFormProps, ) => {

  const Total = FinalData.online + FinalData.storage + FinalData.custom + FinalData.price

  return (
    <div>
      <div className="personal-info-container">
        <div className="title">
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming.</p>
        </div>
       <div className="total-items">
        <div className="item-content plan">
          <h2>{FinalData.plan}</h2>
          <p>${FinalData.price}</p>
        </div>
        <hr />
        <div className="item-content">
          <h2>Online Service</h2>
          {FinalData.online < 1 ? <p>N/A</p> : <p>${FinalData.online}/mo</p>}
        </div>
        <div className="item-content">
          <h2>Larger Storage</h2>
          {FinalData.storage < 1 ? <p>N/A</p> : <p>${FinalData.storage}/mo</p>}
        </div>
        <div className="item-content">
          <h2>Custom</h2>
          {FinalData.custom < 1 ? <p>N/A</p> : <p>${FinalData.custom}/mo</p>}
        </div>
       </div>
       <div className="item-content total">
        <h2>Total (monthly)</h2>
        <p>$+{Total}/mo</p>
       </div>
      </div>
    </div>
  )
}

export default stepfour