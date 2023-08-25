import { useEffect, useRef } from 'react';

const usePrevious = <T>(value: T): T | undefined => {
  const prevRef = useRef<T | undefined>(undefined);
  const curRef = useRef<T | undefined>(undefined);

  useEffect(() => {
    prevRef.current = curRef.current;
    curRef.current = value;
  });

  return prevRef.current;
};

export default usePrevious;
