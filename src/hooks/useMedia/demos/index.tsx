import { useMedia } from '@dext7r/hooks';
import { useEffect } from 'react';

export default () => {
  const isSmallScreen = useMedia('(max-width: 768px)'); // Check if the screen is smaller than 768px

  useEffect(() => {
    if (isSmallScreen) {
      console.log('Small screen detected.');
    } else {
      console.log('Large screen detected.');
    }
  }, [isSmallScreen]);

  return (
    <>
      <h2>Media Query Check</h2>
      <div>Screen size: {isSmallScreen ? 'Small' : 'Large'}</div>
    </>
  );
};
