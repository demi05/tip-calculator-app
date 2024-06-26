import { createContext, useCallback, useContext, useState } from "react";

const GlobalContext = createContext();
export const useInputValues = () => useContext(GlobalContext);

//provider component
export const GlobalProvider = ({ children }) => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [finalTip, setFinalTip] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [errorClass, setErrorClass] = useState("hidden");
  // const tipPercentage = 0.15;

  const handleErrorState = useCallback(() => {
    if (bill === 0) {
      setErrorClass("not-hidden");
    } else {
      setErrorClass("hidden");
    }
  }, [bill]);

  const calculateBill = () => {
    handleErrorState();
    if (bill === 0 || people === 0) {
      return;
    }
    const billPerPerson = bill / people;

    const calculatedFinalTip =
      Math.round(billPerPerson * (tipPercentage / 100) * 100) / 100;

    const calculatedFinalTotal =
      Math.round((calculatedFinalTip + billPerPerson) * 100) / 100;

    setFinalTip(calculatedFinalTip);
    setFinalTotal(calculatedFinalTotal);
    // console.log(tipPercentage);
  };

  return (
    <GlobalContext.Provider
      value={{
        bill,
        setBill,
        people,
        setPeople,
        calculateBill,
        tipPercentage,
        setTipPercentage,
        finalTip,
        setFinalTip,
        finalTotal,
        setFinalTotal,
        handleErrorState,
        errorClass,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
