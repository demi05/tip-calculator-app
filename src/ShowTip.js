import { useInputValues } from "./context/GlobalState";

const ShowTip = () => {
  const submitForm = (e) => {
    e.preventDefault();
  };
  const { calculateBill } = useInputValues();
  const { finalTip } = useInputValues();
  const { finalTotal } = useInputValues();

  return (
    <div className="calc-tip-div">
      <form onSubmit={submitForm}>
        <div>
          <div className="label">
            <p>Tip Amount</p>
            <p className="span">/ person</p>
          </div>
          <p className="final-tip">{finalTip > 0 ? `$${finalTip}` : `$0.00`}</p>
        </div>
        <div>
          <div className="label">
            <p>Total</p>
            <p className="span">/ person</p>
          </div>
          <p className="final-total">
            {finalTotal > 0 ? `$${finalTotal}` : `$0.00`}
          </p>
        </div>

        <button
          onClick={calculateBill}
          className={`not-active-btn ${
            finalTotal > 0 ? "active-btn" : "not-active-btn"
          }`}
        >
          RESET
        </button>
      </form>
    </div>
  );
};

export default ShowTip;
