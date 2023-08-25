import { useCallback, useRef, useState } from 'react';

const useRafState = <T>(initialState: T) => {
  const frame = useRef<number>(0);
  const [state, setState] = useState<T>(initialState);

  const setRafState = useCallback((value: T) => {
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      setState(value);
    });
  }, []);

  return [state, setRafState] as const;
};

export default useRafState;
