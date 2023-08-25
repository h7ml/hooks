import { useCallback, useState } from 'react';

const useCycleList = <T extends unknown>(
  items: T[],
  loop: boolean = false,
): [T, () => void, () => void] => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextItem = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      loop ? (prevIndex + 1) % items.length : Math.min(prevIndex + 1, items.length - 1),
    );
  }, [items.length, loop]);

  const prevItem = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      loop ? (prevIndex - 1 + items.length) % items.length : Math.max(prevIndex - 1, 0),
    );
  }, [items.length, loop]);

  const currentItem = items[currentIndex];

  return [currentItem, nextItem, prevItem];
};

export default useCycleList;
