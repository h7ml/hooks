import { useEffect, useState } from 'react';

interface CustomBatteryManager {
  level: number;
  charging: boolean;
  chargingTime: number;
  dischargingTime: number;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions,
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions,
  ): void;
}

const useBattery = (): CustomBatteryManager | null => {
  const [battery, setBattery] = useState<CustomBatteryManager | null>(null);

  useEffect(() => {
    const handleBatteryChange = (event: Event) => {
      const batteryManager = event.target as unknown as CustomBatteryManager;
      setBattery(batteryManager);
    };

    if ('getBattery' in navigator) {
      (navigator as any).getBattery().then((batteryManager: CustomBatteryManager) => {
        setBattery(batteryManager);
        batteryManager.addEventListener('levelchange', handleBatteryChange);
        batteryManager.addEventListener('chargingchange', handleBatteryChange);
        batteryManager.addEventListener('dischargingtimechange', handleBatteryChange);
        batteryManager.addEventListener('chargingtimechange', handleBatteryChange);
      });
    } else {
      console.warn('Battery API is not supported in this browser.');
    }

    return () => {
      if (battery) {
        battery.removeEventListener('levelchange', handleBatteryChange);
        battery.removeEventListener('chargingchange', handleBatteryChange);
        battery.removeEventListener('dischargingtimechange', handleBatteryChange);
        battery.removeEventListener('chargingtimechange', handleBatteryChange);
      }
    };
  }, []);

  return battery;
};

export default useBattery;
