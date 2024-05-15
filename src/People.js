import { useState, useContext } from "react";
// import { GlobalContext } from "./context/GlobalState";

const People = () => {
  const [people, setPeople] = useState(0);
  // const { addBill } = useContext(GlobalContext);

  // const onMouseUp = () => {
  //   const newBill = {
  //     id: Math.floor(Math.random() * 100000000),
  //     people: +people,
  //   };

  //   // addBill(newBill);
  // };

  return (
    <div className="people-div">
      <h3>Number of People</h3>
      <input
        type="number"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
      />
    </div>
  );
};

export default People;
