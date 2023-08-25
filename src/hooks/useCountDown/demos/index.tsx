import { useCountDown } from '@dext7r/hooks';
import { getHMSTime } from '..';

const CountdownDemo = () => {
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(now.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  const diffInSec = Math.floor((tomorrow.getTime() - now.getTime()) / 1000);

  const [hour, minute, second] = useCountDown(
    diffInSec,
    getHMSTime,
    () => {
      console.log('Countdown reached zero!');
    },
    true,
  ); // 设置 autoStart 为 true，自动启动倒计时

  return <div suppressHydrationWarning={true}>{`${hour}:${minute}:${second}`}</div>;
};

export default CountdownDemo;
