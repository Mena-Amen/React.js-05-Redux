// 2- Create Reducer to set state and Change it
export const reducerAuth = (state = { isLog: false }, action) => {
  if (action.type === "isLoging") {
    return { isLog: true };
  } else if (action.type === "notLogin") {
    return { isLog: false };
  }
  return state;
};
