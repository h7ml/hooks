import { useEffect, useRef } from 'react';

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void>();

  // Save the latest callback to the ref
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current();
      }
    };

    if (delay !== null) {
      const intervalId = setInterval(tick, delay);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [delay]);
};

export default useInterval;
