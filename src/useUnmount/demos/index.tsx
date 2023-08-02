import { useUnmount } from '@aileen/hooks';
import { Button } from 'antd';
import React from 'react';

export default () => {
  const [showButton, setShowButton] = React.useState(true);

  useUnmount(() => {
    // 在组件卸载时执行的操作
    // 例如清理 Ant Design 组件或其他相关操作
    console.log('Component unmounted');
  });

  const handleToggle = () => {
    setShowButton(!showButton);
  };

  return (
    <div>
      {showButton && <Button>Click Me</Button>}
      <Button onClick={handleToggle}>Toggle Button</Button>
    </div>
  );
};
