import { useMountedState } from '@dext7r/hooks';
import { message } from 'antd';
import { useEffect } from 'react';

export default () => {
  const isMounted = useMountedState();

  useEffect(() => {
    if (isMounted()) {
      message.info('Component is mounted.');
    } else {
      message.warning('Component is not mounted.');
    }
  }, [isMounted]);

  return <div>Component Lifecycle Example</div>;
};
