import shop from "../../../shop";

const logger = ({ getState, dispatch }) => next => action => {
  const prevState = getState(); // pries veiksmui ivykstant
  const rezult = next(action); // ivykdome veiksma
  const nextState = getState(); // po veiksmo

  console.log("prevState", prevState);
  console.log("action.type", action.type, "action.payload", action.payload);
  console.log("nextState", nextState);

  if (action.type === shop.types.TOGGLE_FAVORITE_PRODUCT) {
    dispatch({ type: "RANDOM" });
  }

  return rezult;
};

export default logger;
