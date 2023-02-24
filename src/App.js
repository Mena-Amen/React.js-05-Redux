import { useSelector, useDispatch } from "react-redux";
// import { increment } from "./type/type";
function App() {
  // 4- Access data from Store Reducer with useSelector
  const count = useSelector((state) => state.Counter.counter);
  const islog = useSelector((state) => state.Auth.isLog);
  console.log(islog);
  // Change Data in Reducer by useDispatch
  const dispatchCounter = useDispatch();
  return (
    <div>
      <h3>Counter:</h3>
      <h3>{count}</h3>
      {islog === true ? (
        <h2>You are User</h2>
      ) : (
        <h2>You are NOT a User Please Login</h2>
      )}
      <button onClick={() => dispatchCounter({ type: "increment" })}>
        Increase
      </button>
      <button onClick={() => dispatchCounter({ type: "decrement" })}>
        Decrease
      </button>
      <button onClick={() => dispatchCounter({ type: "reset" })}>Reset</button>

      <button onClick={() => dispatchCounter({ type: "isLoging" })}>
        User
      </button>
      <button onClick={() => dispatchCounter({ type: "notLogin" })}>
        You Are Not a User
      </button>
    </div>
  );
}

export default App;
