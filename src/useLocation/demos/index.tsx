import { useLocation } from '@dext7r/hooks';
import { useEffect } from 'react';

export default () => {
  const { latitude, longitude, error } = useLocation();

  useEffect(() => {
    if (error) {
      console.error('Error fetching location:', error);
    } else {
      console.log('Latitude:', latitude);
      console.log('Longitude:', longitude);
    }
  }, [error, latitude, longitude]);

  return (
    <>
      <h2>Location Data</h2>
      {error ? <div>Error: {error}</div> : null}
      <div>Latitude: {latitude}</div>
      <div>Longitude: {longitude}</div>
    </>
  );
};
