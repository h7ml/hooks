import { useGeolocation } from '@dext7r/hooks';
import { useEffect } from 'react';

export default () => {
  const { latitude, longitude, error } = useGeolocation();

  useEffect(() => {
    if (error) {
      console.error('Error fetching geolocation:', error.message);
    } else {
      console.log('Latitude:', latitude);
      console.log('Longitude:', longitude);
    }
  }, [error, latitude, longitude]);

  return (
    <>
      <h2>Geolocation Data</h2>
      {error ? <div>Error: {error.message}</div> : null}
      <div>Latitude: {latitude}</div>
      <div>Longitude: {longitude}</div>
    </>
  );
};
