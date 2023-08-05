import { useState, useEffect } from 'react';

interface MediaDeviceInfo {
  deviceId: string;
  kind: string;
  label: string;
}

const useMediaDevices = (): MediaDeviceInfo[] => {
  const [mediaDevices, setMediaDevices] = useState<MediaDeviceInfo[]>([]);

  useEffect(() => {
    const getMediaDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const mediaDeviceInfos: MediaDeviceInfo[] = devices.map((device) => ({
          deviceId: device.deviceId,
          kind: device.kind,
          label: device.label,
        }));
        setMediaDevices(mediaDeviceInfos);
      } catch (error) {
        console.error('Error enumerating media devices:', error);
        setMediaDevices([]);
      }
    };

    getMediaDevices();

    // Add event listener to detect changes in media devices (e.g., when a new device is connected)
    const handleDeviceChange = () => {
      getMediaDevices();
    };
    navigator.mediaDevices.addEventListener('devicechange', handleDeviceChange);

    return () => {
      navigator.mediaDevices.removeEventListener('devicechange', handleDeviceChange);
    };
  }, []);

  return mediaDevices;
};

export default useMediaDevices;
