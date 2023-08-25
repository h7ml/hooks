import { useCallback, useState } from 'react';

const useSessionStorage = <T>(key: string, initialValue: T): [T, (value: T) => void] => {
  const getSessionStorageValue = (): T => {
    try {
      const item = sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error parsing sessionStorage item with key "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(getSessionStorageValue);

  const setValue = useCallback(
    (value: T) => {
      try {
        setStoredValue(value);
        sessionStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting sessionStorage item with key "${key}":`, error);
      }
    },
    [key],
  );

  return [storedValue, setValue];
};

export default useSessionStorage;
