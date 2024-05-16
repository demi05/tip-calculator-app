import { useInputValues } from "./context/GlobalState";

const Bill = () => {
  const { bill, setBill } = useInputValues();

  return (
    <div className="bill-div">
      <div className="bill-div-text">
        <h3>Bill</h3>
        <p className={`hidden-p ${bill === 0 ? "hidden" : "not-hidden"}`}>
          Can't be zero
        </p>
      </div>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
};

export default Bill;
