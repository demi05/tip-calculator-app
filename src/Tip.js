import { useState } from "react";
import { useInputValues } from "./context/GlobalState";

const Tip = () => {
  let { setTipPercentage } = useInputValues();
  const tips = [
    { id: 1, value: 5 },
    { id: 2, value: 10 },
    { id: 3, value: 15 },
    { id: 4, value: 25 },
    { id: 5, value: 50 },
    { id: 6, value: "Custom" },
  ];

  const [activeTipId, setActiveTipId] = useState(null);
  const [customTip, setCustomTip] = useState("");

  const handleTipSelection = (id, value) => {
    setActiveTipId(id);
    if (typeof value === "number") {
      setCustomTip("");
    }
    setTipPercentage(value);
  };

  const handleCustomTipChange = (value) => {
    setCustomTip(value);
    setTipPercentage(parseFloat(value));
  };

  return (
    <div className="tip-main-div">
      <h3>Select Tip %</h3>
      <div className={"tip-div"}>
        {tips.map((tip) => (
          <p
            id="p"
            className={`tip ${
              activeTipId === tip.id ? "active-tip" : "inactive-tip"
            }`}
            key={tip.id}
            onClick={() => handleTipSelection(tip.id, tip.value)}
          >
            {tip.value === "Custom" ? (
              <input
                className="custom-tip"
                type="number"
                placeholder="Custom"
                value={customTip}
                onChange={(e) => handleCustomTipChange(e.target.value)}
              />
            ) : (
              `${tip.value}%`
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tip;
