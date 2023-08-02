import { useLatest } from '@aileen/hooks';
import { Button } from 'antd';
import React from 'react';

export default () => {
  const [count, setCount] = React.useState(0);

  const latestCountRef = useLatest(count);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {latestCountRef.current}</p>
      <Button onClick={handleClick}>Increment</Button>
    </div>
  );
};
