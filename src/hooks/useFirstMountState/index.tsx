import { useEffect, useRef } from 'react';

const useFirstMountState = (): boolean => {
  const isFirstMountRef = useRef<boolean>(true);

  useEffect(() => {
    isFirstMountRef.current = false;
  }, []);

  return isFirstMountRef.current;
};

export default useFirstMountState;
