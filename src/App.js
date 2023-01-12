import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, sign_in, logout } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment(3))}>+3</button>
      <button onClick={() => dispatch(decrement(3))}>-3</button>
      {isLogged ? (
        <div>
          <h1>Logged</h1>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Not logged</h1>
          <button onClick={() => dispatch(sign_in())}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
