import { increment, decrement } from "../type/type";

// 2- Create Reducer to set state and Change it
export const reduceCounter = (state = { counter: 0 }, action) => {
  if (action.type === increment) {
    return { counter: state.counter + 1 };
  } else if (action.type === decrement) {
    return { counter: state.counter - 1 };
  } else if (action.type === "reset") {
    return { counter: 0 };
  }
  return state;
};
