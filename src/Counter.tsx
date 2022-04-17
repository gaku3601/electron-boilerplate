import React from "react";
import {useCounter} from "@/useCounter";

export default () => {
  const { count, decrement, increment } = useCounter();
  return (
      <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
  );
}