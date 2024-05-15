import { useState } from "react";
const Tip = () => {
  const tips = [
    { id: 1, value: 5 },
    { id: 2, value: 10 },
    { id: 3, value: 15 },
    { id: 4, value: 25 },
    { id: 5, value: 50 },
    { id: 6, value: "Custom" },
  ];
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="tip-main-div">
      <h3>Select Tip %</h3>
      <div className={"tip-div"}>
        {tips.map((tip) => (
          <p
            className={`tip ${isActive ? "active-tip" : "inactive-tip"}`}
            key={tip.id}
            onClick={() => setIsActive(!isActive)}
          >
            {typeof tip.value === "number" ? `${tip.value} %` : `${tip.value}`}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tip;
