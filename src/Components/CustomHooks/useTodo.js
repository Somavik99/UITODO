import { useReducer } from "react";
import { functionReducer } from "./ReducerActions";

const useTodo = () => {
  const [state, dispatch] = useReducer(functionReducer, []);

  return { ReducerState: state, ReducerDispatch: dispatch };
};

export default useTodo;
