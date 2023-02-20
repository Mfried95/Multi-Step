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
        <span>{FinalData.plan}</span>
        <span>Online Service {FinalData.online}   +$1/mo</span>
        <span>{FinalData.storage}</span>
        <span>{FinalData.custom}</span>
        <span>Total (per month): ${Total}</span>
       </div>
      </div>
    </div>
  )
}

export default stepfour