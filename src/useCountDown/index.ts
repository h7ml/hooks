import { useInterval } from '@dext7r/hooks';
import { useEffect, useState } from 'react';

const padZero = (time: number): string => {
  return `${time}`.length < 2 ? `0${time}` : `${time}`;
};

export const getHMSTime = (timeDiff: number): [string, string, string] => {
  if (timeDiff <= 0) {
    return ['00', '00', '00'];
  }
  if (timeDiff > 100 * 3600) {
    return ['99', '59', '59'];
  }
  const hour = Math.floor(timeDiff / 3600);
  const minute = Math.floor((timeDiff - hour * 3600) / 60);
  const second = timeDiff - hour * 3600 - minute * 60;
  return [padZero(hour), padZero(minute), padZero(second)];
};

const useCountDown = (
  time: number,
  format: (num: number) => [string, string, string] = getHMSTime,
  callback?: () => void,
  autoStart: boolean = true,
) => {
  const [remainTime, setRemainTime] = useState(time);
  const [delay, setDelay] = useState<number | null>(autoStart ? 1000 : null);

  useInterval(() => {
    if (remainTime <= 0) {
      setDelay(null);
      return;
    }
    setRemainTime(remainTime - 1);
  }, delay);

  useEffect(() => {
    if (time > 0 && remainTime <= 0) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      callback && callback();
    }
  }, [callback, remainTime, time]);

  const [hour, minute, second] = format(remainTime);

  return [hour, minute, second] as const;
};

export default useCountDown;
