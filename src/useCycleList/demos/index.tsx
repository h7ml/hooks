import { useCycleList } from '@dext7r/hooks';
import { Button } from 'antd';

const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

export default () => {
  const [currentItem, nextItem, prevItem] = useCycleList(items, true);

  return (
    <>
      <h2>useCycleList Example</h2>
      <p>Current Item: {currentItem}</p>
      <Button onClick={prevItem}>Previous</Button>
      <Button onClick={nextItem}>Next</Button>
    </>
  );
};
