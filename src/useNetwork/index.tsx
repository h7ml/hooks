import { useEffect, useState } from 'react';

interface NetworkState {
  online: boolean;
}

const useNetwork = (): NetworkState => {
  const [networkState, setNetworkState] = useState<NetworkState>({
    online: navigator.onLine,
  });

  useEffect(() => {
    const handleOnline = () => {
      setNetworkState({ online: true });
    };

    const handleOffline = () => {
      setNetworkState({ online: false });
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
