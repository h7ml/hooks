import { useCallback, useState } from 'react';

const useLocalStorage = <T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void, () => T, () => void] => {
  const getLocalStorageValue = (): T => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error parsing localStorage item with key "${key}":`, error);
      return initialValue;
    }
  };

  const [storedValue, setStoredValue] = useState<T>(getLocalStorageValue);

  const setValue = useCallback(
    (value: T) => {
      try {
        setStoredValue(value);
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting localStorage item with key "${key}":`, error);
      }
    },
    [key],
  );

  const getValue = useCallback((): T => {
    return getLocalStorageValue();
  }, []);

  const deleteValue = useCallback(() => {
    try {
      setStoredValue(initialValue);
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error deleting localStorage item with key "${key}":`, error);
    }
  }, [initialValue, key]);

  return [storedValue, setValue, getValue, deleteValue];
};

export default useLocalStorage;
