import { useEffect, useState } from 'react';

interface GeolocationPositionState {
  latitude: number;
  longitude: number;
  error: string | null;
}

const useGeolocation = (): GeolocationPositionState => {
  const [position, setPosition] = useState<GeolocationPositionState>({
    latitude: 0,
    longitude: 0,
    error: null,
  });

  useEffect(() => {
    const successHandler = (position: GeolocationPosition) => {
      setPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    };

    const errorHandler = () => {
      setPosition({
        latitude: 0,
        longitude: 0,
        error: 'Geolocation API is not supported in this browser.',
      });
    };

    const options: PositionOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    const geo = navigator.geolocation;
    if (geo) {
      geo.getCurrentPosition(successHandler, errorHandler, options);
    } else {
      setPosition({
        latitude: 0,
        longitude: 0,
        error: 'Geolocation API is not supported in this browser.',
      });
    }
  }, []);

  return position;
};

export default useGeolocation;
