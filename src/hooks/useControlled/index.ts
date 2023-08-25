import { useEffect, useState } from 'react';

const useControlled = <T extends unknown>(value: T | undefined, defaultValue: T): [T, boolean] => {
  const [controlledValue, setControlledValue] = useState<T | undefined>(value);
  const isControlled = value !== undefined;

  useEffect(() => {
    if (isControlled) {
      setControlledValue(value);
    } else {
      setControlledValue(defaultValue);
    }
  }, [value, defaultValue, isControlled]);

  return [controlledValue as T, isControlled];
};

export default useControlled;
