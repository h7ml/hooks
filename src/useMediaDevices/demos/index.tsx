import { useMediaDevices } from '@dext7r/hooks'
import { useEffect } from 'react';

export default () => {
  const mediaDevices = useMediaDevices();

  useEffect(() => {
    console.log('Connected media devices:', mediaDevices);
  }, [mediaDevices]);

  return (
    <>
      <h2>Connected Media Devices</h2>
      {mediaDevices.length === 0 ? (
        <div>No media devices found.</div>
      ) : (
        <ul>
          {mediaDevices.map((device) => (
            <li key={device.deviceId}>
              {device.label} ({device.kind})
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
