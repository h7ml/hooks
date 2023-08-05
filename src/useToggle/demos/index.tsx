import { useToggle } from '@dext7r/hooks';
import { Button } from 'antd';

export default () => {
  const [isToggled, toggle] = useToggle();

  return (
    <>
      <div>当前布尔值：{String(isToggled)}</div>
      <Button type="primary" onClick={toggle}>
        切换布尔值
      </Button>
    </>
  );
};
