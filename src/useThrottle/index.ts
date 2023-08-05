import { useEffect, useRef, useState } from 'react';

const useThrottle = <T>(value: T, delay: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const previousValueRef = useRef<T>(value);

  useEffect(() => {
    if (value !== previousValueRef.current) {
      previousValueRef.current = value;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setThrottledValue(value);
      }, delay);
    }
  }, [value, delay]);

  return throttledValue;
};

export default useThrottle;
