import { isYesterday } from '@dext7r/hooks';
import { useEffect, useState } from 'react';

export default () => {
  const [isYesterdayDate, setIsYesterdayDate] = useState<boolean>(false);
  useEffect(() => {
    const flag = isYesterday(new Date())
    setIsYesterdayDate(flag);
  }, []);

  return (
    <>
      <h2>{isYesterdayDate ? 'Yesterday' : 'Not Yesterday'}</h2>
    </>
  );
};
