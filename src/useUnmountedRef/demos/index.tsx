import { useMount, useUnmount, useUnmountedRef } from '@aileen/hooks';
import { Button } from 'antd';
import { useState } from 'react';

const Child = () => {
  const unmountedRef = useUnmountedRef();

  useMount(() => {
    console.log('初始化：', unmountedRef);
  });
  useUnmount(() => {
    console.log('卸载：', unmountedRef);
  });

  return <div>你看到的我，是哪一种颜色~</div>;
};

const Index = () => {
  const [flag, setFlag] = useState<boolean>(false);

  return (
    <div>
      <Button type="primary" onClick={() => setFlag((v) => !v)}>
        切换 {flag ? '卸载' : '初始化'}
      </Button>
      {flag && <Child />}
    </div>
  );
};

export default Index;
