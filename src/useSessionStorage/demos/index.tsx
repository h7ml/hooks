import { useSessionStorage } from '@dext7r/hooks';
import { Button, Input } from 'antd';
import { useState } from 'react';

export default () => {
  const [inputValue, setInputValue] = useState('');
  const [storedValue, setValue] = useSessionStorage<string>('example_key', ''); // Pass the sessionStorage key to useSessionStorage hook

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    setValue(inputValue);
  };

  return (
    <>
      <Input
        style={{ width: 240, marginRight: 8 }}
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button onClick={handleSave}>Save to sessionStorage</Button>
      <div>Stored Value: {storedValue}</div>
    </>
  );
};
