import { useState, useContext } from "react";
// import { GlobalContext } from "./context/GlobalState";

const Bill = () => {
  const [bill, setBill] = useState(0);
  //   const { addBill } = useContext(GlobalContext);

  //   const onMouseUp = () => {
  //     const newBill = {
  //       id: Math.floor(Math.random() * 100000000),
  //       bill: +bill,
  //     };

  //     addBill(newBill);
  //   };

  return (
    <div className="bill-div">
      <h3>Bill</h3>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
};

export default Bill;
