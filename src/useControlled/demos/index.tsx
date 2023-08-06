import { useControlled } from '@dext7r/hooks';
import { useState } from 'react';

export default () => {
  const [controlledValue, isControlled] = useControlled<string | undefined>(
    undefined,
    'default value',
  );
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) {
      setInputValue(e.target.value);
    }
  };

  return (
    <>
      <h2>useControlled Example</h2>
      {isControlled ? (
        <div>
          <p>This component is controlled.</p>
          <input type="text" value={controlledValue} onChange={handleChange} />
          <p>Controlled value: {controlledValue}</p>
        </div>
      ) : (
        <div>
          <p>This component is not controlled.</p>
          <input type="text" value={inputValue} onChange={handleChange} />
          <p>Input value: {inputValue}</p>
        </div>
      )}
    </>
  );
};
