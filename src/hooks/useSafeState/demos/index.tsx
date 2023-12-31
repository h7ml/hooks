import { useSafeState } from '@dext7r/hooks';
import { Button } from 'antd';
import { useEffect, useState } from 'react';

const Child = () => {
  const [value, setValue] = useSafeState('二选一，别选我');

  useEffect(() => {
    setTimeout(() => {
      setValue('定时器3s后触发');
    }, 3000);
  }, []);

  const text = value || 'Loading...';

  return <div>{text}</div>;
};

const Index = () => {
  const [flag, setFlag] = useState<boolean>(false);

  return (
    <div>
      <Button type="primary" onClick={() => setFlag((v) => !v)}>
        切换 {flag ? 'unmount' : 'mount'}
      </Button>
      {flag && <Child />}
    </div>
  );
};

export default Index;
