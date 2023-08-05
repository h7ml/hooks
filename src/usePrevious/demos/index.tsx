import { usePrevious } from '@dext7r/hooks';
import { Button } from 'antd';
import { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <div>Current Count: {count}</div>
      <div>Previous Count: {prevCount !== undefined ? prevCount : 'N/A'}</div>
      <Button type="primary" onClick={handleIncrement}>
        Increment Count
      </Button>
    </>
  );
};
