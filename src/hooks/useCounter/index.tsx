import { useState } from 'react';

const useCounter = (initialValue: number = 0) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = (step: number = 1) => {
    setCount((prevCount) => prevCount + step);
  };

  const decrement = (step: number = 1) => {
    setCount((prevCount) => prevCount - step);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return {
    count,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
