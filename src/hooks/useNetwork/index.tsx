import { useEffect, useState } from 'react';

interface NetworkState {
  online?: boolean;
  rtt?: number;
  type?:
  | "bluetooth"
  | "cellular"
  | "ethernet"
  | "none"
  | "wifi"
  | "wimax"
  | "other"
  | "unknown";
  saveData?: boolean;
  downlinkMax?: number;
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g";
}

const getConnection = (): NetworkState | undefined => {
  if (navigator && typeof navigator === "object") {
    const nav = navigator as any;
    return {
      rtt: nav.connection?.rtt,
      type: nav.connection?.type || 'unknown',
      saveData: nav.connection?.saveData,
      downlinkMax: nav.connection?.downlinkMax || 0,
      effectiveType: nav.connection?.effectiveType,
    };
  }
};

const useNetwork = (): NetworkState => {

  // 获取网络状态信息
  const connection = getConnection();
  const [networkState, setNetworkState] = useState<NetworkState>({
    online: navigator.onLine,
    ...connection,
  });

  useEffect(() => {
    const handleOnline = () => {
      setNetworkState((prevState) => ({ ...prevState, online: true }));
    };

    const handleOffline = () => {
      setNetworkState((prevState) => ({ ...prevState, online: false }));
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return networkState;
};

export default useNetwork;
