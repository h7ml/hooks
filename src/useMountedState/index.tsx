import { useEffect, useRef } from 'react';

const useMountedState = () => {
  const mountedRef = useRef<boolean>(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return () => mountedRef.current;
};

export default useMountedState;
