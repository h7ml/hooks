import { useMount } from '@dext7r/hooks';
import { useState } from 'react';

export default () => {
  const [message, setMessage] = useState<string>('')
  useMount(() => {
    setMessage('人生如若初见,何事秋风悲画扇！')
  });

  return <div>{message}</div>
};
