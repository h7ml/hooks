import { useNetwork } from '@dext7r/hooks';
import { useEffect } from 'react';

export default () => {
  const { online, rtt, type, saveData, downlinkMax, effectiveType } = useNetwork();

  useEffect(() => {
    console.log('Online:', online);
  }, [online]);

  return (
    <>
      <h2>Network Connection Status</h2>
      <div>Online: {online ? 'Yes' : 'No'}</div>
      <div>RTT: {rtt}</div>
      <div>Type: {type}</div>
      <div>Save Data: {saveData ? 'Yes' : 'No'}</div>
      <div>Downlink Max: {downlinkMax}</div>
      <div>Effective Type: {effectiveType}</div>
    </>
  );
};
