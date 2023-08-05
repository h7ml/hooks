import { useMeasure } from '@dext7r/hooks';
import { useEffect } from 'react';

export default () => {
  const [ref, size] = useMeasure();

  useEffect(() => {
    console.log('Width:', size.width);
    console.log('Height:', size.height);
  }, [size]);

  return (
    <>
      <h2>Element Size</h2>
      <div ref={ref} style={{ width: '200px', height: '100px', background: 'blue' }} />
    </>
  );
};
