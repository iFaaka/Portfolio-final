import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (val = 1) => setCounter(counter + 1);
  const reset = (initialValue) => setCounter(initialValue);
  const decrement = (val = 1) => setCounter(counter - 1);

  return {
    counter,
    decrement,
    increment,
    reset,
  };
};
