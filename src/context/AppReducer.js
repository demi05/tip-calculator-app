export default (state, action) => {
  switch (action.type) {
    case "ADD_BILL":
      return {
        ...state,
        bills: [action.payload, ...state.bills],
      };
    default:
      return state;
  }
};
