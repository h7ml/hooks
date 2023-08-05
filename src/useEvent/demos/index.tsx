import { Button } from 'antd';
import { useEvent } from '@dext7r/hooks'
import { useState } from 'react';

export default () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };

  useEvent('click', handleClick);

  return (
    <>
      <h2>Click Counter</h2>
      <Button>Click Me</Button>
      <div>Click Count: {clickCount}</div>
    </>
  );
};
