import { useFirstMountState } from '@dext7r/hooks';
import { Alert } from 'antd';

export default () => {
  const isFirstMount = useFirstMountState();

  return (
    <>
      {isFirstMount && <Alert message="This is the first render!" type="info" />}
      <div>Component content goes here.</div>
    </>
  );
};
