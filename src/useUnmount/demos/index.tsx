import { useUnmount } from '@dext7r/hooks';
import { message } from 'antd';

export default () => {
  useUnmount(() => {
    message.success('useUnmount: 分手应该体面,谁都不要说抱歉');
  });

  return 'useUnmount只会在函数销毁后触发。切换到其他页面即可查看信息';
};
