import { useInputValues } from "./context/GlobalState";

const Bill = () => {
  const { bill, setBill } = useInputValues();

  const disableScroll = (e) => {
    // This prevents the wheel event from changing the number input's value
    e.preventDefault();
  };

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
        onBlur={disableScroll}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
};

export default Bill;
