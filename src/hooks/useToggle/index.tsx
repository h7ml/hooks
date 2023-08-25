import { useCallback, useState } from 'react';

const useToggle = (initialValue: boolean = false): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  return [value, toggle];
};

export default useToggle;
