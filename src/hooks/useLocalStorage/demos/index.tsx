import { useLocalStorage } from '@dext7r/hooks';
import { Button, Input, message } from 'antd';
import { useState } from 'react';

export default () => {
  const [inputValue, setInputValue] = useState('');
  const [customKey, setCustomKey] = useState(''); // Set the initial custom key to an empty string
  const [storedValue, setValue, getValue, deleteValue] = useLocalStorage<string>(customKey, ''); // Pass the custom key to useLocalStorage hook

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    if (customKey === '') {
      message.error('Please enter a custom key before saving to localStorage.');
    } else {
      setValue(inputValue);
      message.success('Value saved to localStorage!');
    }
  };

  const handleGet = () => {
    if (customKey === '') {
      message.error('Please enter a custom key before getting from localStorage.');
    } else {
      const value = getValue();
      message.info(`Value from localStorage: ${value}`);
    }
  };

  const handleDelete = () => {
    if (customKey === '') {
      message.error('Please enter a custom key before deleting from localStorage.');
    } else {
      deleteValue();
      message.success('Value deleted from localStorage!');
    }
  };

  const handleCustomKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomKey(e.target.value);
  };

  return (
    <>
      <Input
        style={{ width: 240, marginRight: 8 }}
        value={customKey}
        onChange={handleCustomKeyChange}
        placeholder="Enter Custom Key"
      />
      <Input
        style={{ width: 240, marginRight: 8 }}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter Value"
      />
      <Button type="primary" onClick={handleSave}>
        Save to localStorage
      </Button>
      <Button type="default" onClick={handleGet}>
        Get from localStorage
      </Button>
      <Button onClick={handleDelete}>Delete from localStorage</Button>
      <div>Stored Value: {storedValue}</div>
    </>
  );
};
