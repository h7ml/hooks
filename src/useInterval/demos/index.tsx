import { useInterval } from '@dext7r/hooks';
import { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  const intervalCallback = () => {
    setCount(count + 1);
  };

  useInterval(intervalCallback, 1000);

  return <div>count: {count}</div>;
};
