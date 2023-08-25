import { useBattery } from '@dext7r/hooks';
import { useEffect, useState } from 'react';

export default () => {
  const battery = useBattery();
  const [batteryLevel, setBatteryLevel] = useState<number | null>(null);

  useEffect(() => {
    if (battery) {
      setBatteryLevel(battery.level * 100);
    }
  }, [battery]);

  return (
    <>
      <h2>Battery Status</h2>
      {batteryLevel !== null ? (
        <div>Battery Level: {batteryLevel.toFixed(2)}%</div>
      ) : (
        <div>Loading battery status...</div>
      )}
    </>
  );
};
