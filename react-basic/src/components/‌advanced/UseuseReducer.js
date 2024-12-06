import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "SET":
      return state + action.paloy;
    default:
      return state;
  }
};

const UseuseReducer = () => {
  const [state, dispatch] = useReducer(reducer, 10);
  return (
    <div>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      {state}
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "SET", paloy: 100 })}>
        +100
      </button>
    </div>
  );
};

export default UseuseReducer;
