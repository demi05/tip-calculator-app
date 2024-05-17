import { useInputValues } from "./context/GlobalState";

const Bill = () => {
  const { bill, setBill, handleErrorState, errorClass } = useInputValues();

  return (
    <div className="bill-div">
      <div className="bill-div-text">
        <h3>Bill</h3>
        <p className={`hidden-p ${errorClass}`}>Can't be zero</p>
      </div>
      <div className="input">
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          onBlur={handleErrorState}
        />
      </div>
    </div>
  );
};

export default Bill;
