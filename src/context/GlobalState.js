import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
export const useInputValues = () => useContext(GlobalContext);

//provider component
export const GlobalProvider = ({ children }) => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const tip = 0.15;

  const calculateBill = () => {
    const billPerPerson = bill / people;
    const finalTip = Math.round(billPerPerson * tip * 100) / 100;
    const finalTotal = Math.round((finalTip + billPerPerson) * 100) / 100;
    console.log(billPerPerson, finalTip, finalTotal);
  };

  return (
    <GlobalContext.Provider
      value={{ bill, setBill, people, setPeople, calculateBill }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
