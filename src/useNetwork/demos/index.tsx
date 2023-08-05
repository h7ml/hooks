import { useNetwork } from '@dext7r/hooks';
import { useEffect } from 'react';

export default () => {
  const { online, type } = useNetwork();

  useEffect(() => {
    console.log('Online:', online);
    console.log('Connection Type:', type);
  }, [online, type]);

  return (
    <>
      <h2>Network Connection Status</h2>
      <div>Online: {online ? 'Yes' : 'No'}</div>
      <div>Connection Type: {type || 'N/A'}</div>
    </>
  );
};
