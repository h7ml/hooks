import { useCounter } from '@dext7r/hooks';
import { Button } from 'antd';

export default () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <>
      <div>Count: {count}</div>
      <Button onClick={() => increment()}>Increment</Button>
      <Button onClick={() => decrement()}>Decrement</Button>
      <Button onClick={() => reset()}>Reset</Button>
    </>
  );
};
