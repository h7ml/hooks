import { useIdle } from '@dext7r/hooks';
import { useEffect } from 'react';

export default () => {
  const isIdle = useIdle(3000); // Set the timeout to 3 seconds (3000 milliseconds)

  useEffect(() => {
    if (isIdle) {
      console.log('User is idle.');
    } else {
      console.log('User is active.');
    }
  }, [isIdle]);

  return (
    <>
      <h2>Idle Detection</h2>
      <div>User is {isIdle ? 'idle' : 'active'}</div>
    </>
  );
};
