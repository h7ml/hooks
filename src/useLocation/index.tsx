import { useState, useEffect } from 'react';

interface LocationState {
  latitude: number | null;
  longitude: number | null;
  error: string | null;
}

const useLocation = (): LocationState => {
  const [location, setLocation] = useState<LocationState>({
    latitude: null,
    longitude: null,
    error: null,
  });

  useEffect(() => {
    const successHandler = (position: GeolocationPosition) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    };

    const errorHandler = () => {
      setLocation({
        latitude: null,
        longitude: null,
        error: 'Error getting location data.',
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
      setLocation({
        latitude: null,
        longitude: null,
        error: 'Geolocation API is not supported in this browser.',
      });
    }
  }, []);

  return location;
};

export default useLocation;
