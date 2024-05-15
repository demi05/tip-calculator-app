import { useState } from "react";
import { useInputValues } from "./context/GlobalState";
const Tip = () => {
  const { tipPercentage, setTipPercentage } = useInputValues();
  const tips = [
    { id: 1, value: 5 },
    { id: 2, value: 10 },
    { id: 3, value: 15 },
    { id: 4, value: 25 },
    { id: 5, value: 50 },
    { id: 6, value: "Custom" },
  ];

  const [isActive, setIsActive] = useState(false);
  const [custom, setCustom] = useState("");

  const handleTipSelection = (value) => {
    setTipPercentage(value);
    setIsActive(true);
  };

  return (
    <div className="tip-main-div">
      <h3>Select Tip %</h3>
      <div className={"tip-div"}>
        {tips.map((tip) => (
          <p
            className={`tip ${isActive ? "active-tip" : "inactive-tip"}`}
            key={tip.id}
            onClick={() => handleTipSelection(tip.value)}
          >
            {/* {typeof tip.value === "string" ? (
              <input
                type="number"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
              />
            ) : (
              `${tip.value} %`
            )} */}
            {typeof tip.value === "number" ? `${tip.value} %` : `${tip.value}`}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tip;
