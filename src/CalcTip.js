import { useState } from "react";

const CalcTip = () => {
  const [tip, setTip] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const submitForm = (e) => {
    e.preventDefault();
  };
  const disableScroll = (e) => {
    // This prevents the wheel event from changing the number input's value
    e.preventDefault();
  };

  return (
    <div className="calc-tip-div">
      <form onSubmit={submitForm}>
        <div>
          <div className="label">
            <p>Tip Amount</p>
            <p className="span">/ person</p>
          </div>
          <input
            type="number"
            value={`${tip}`}
            onChange={(e) => setTip(e.target.value)}
            onFocus={(e) => e.target.addEventListener("wheel", disableScroll)}
            onBlur={(e) => e.target.removeEventListener("wheel", disableScroll)}
          />
        </div>
        <div>
          <div className="label">
            <p>Total</p>
            <p className="span">/ person</p>
          </div>
          <input
            type="number"
            value={` ${tip + total}`}
            onChange={(e) => setTotal(e.target.value)}
            onFocus={(e) => e.target.addEventListener("wheel", disableScroll)}
            onBlur={(e) => e.target.removeEventListener("wheel", disableScroll)}
          />
        </div>

        <button className="reset">RESET</button>
      </form>
    </div>
  );
};

export default CalcTip;
