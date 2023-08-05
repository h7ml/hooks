import { useDebounce } from '@dext7r/hooks';
import { Input } from 'antd';
import { useState } from 'react';

export default () => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Input value={inputValue} onChange={handleInputChange} />
      <div>Debounced Value: {debouncedValue}</div>
    </>
  );
};
