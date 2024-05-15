import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// import Bill from "../Bill";

//initial state
const initialState = {
  bills: [],
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //actions
  function addBill(bill) {
    dispatch({
      type: "ADD_BILL",
      payload: bill,
    });
  }

  return (
    <GlobalContext.Provider value={{ bills: state.bills, addBill }}>
      {children}
    </GlobalContext.Provider>
  );
};
