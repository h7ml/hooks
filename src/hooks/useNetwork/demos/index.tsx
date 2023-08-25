import { useNetwork } from '@dext7r/hooks';
import { useEffect } from 'react';

export default () => {
  const { online } = useNetwork();

  useEffect(() => {
    console.log('Online:', online);
  }, [online]);

  return (
    <>
      <h2>Network Connection Status</h2>
      <div>Online: {online ? 'Yes' : 'No'}</div>
    </>
  );
};
