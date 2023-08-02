import { useMount } from '@aileen/hooks';
import { Button } from 'antd';

export default () => {
  useMount(() => {
    // 在组件挂载时执行的操作
    // 例如初始化 Ant Design 组件或其他相关操作
    console.log('Component mounted');
  });

  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
};
