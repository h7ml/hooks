import { useMount, useUnmount, useUnmountedRef } from '@dext7r/hooks';
import { Button, message } from 'antd';
import { useState } from 'react';

const Child = () => {
  const unmountedRef = useUnmountedRef();
  useMount(() => {
    message.success('朱砂痣');
    console.log('初始化：', unmountedRef);
  });
  useUnmount(() => {
    message.success('白月光');
    console.log('卸载：', unmountedRef);
  });

  return <div>得不到的美好,总在心间挠</div>;
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
