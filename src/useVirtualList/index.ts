import { CSSProperties, OverflowY, RefObject, useMemo, useRef, useState } from 'react';

export interface UseVirtualListOptions {
  containerHeight?: number;
  itemHeight: number | ((index: number) => number);
  overscan?: number;
}

export interface UseVirtualListItem<T> {
  data: T;
  index: number;
}

export interface UseVirtualListReturn<T> {
  list: UseVirtualListItem<T>[];
  scrollTo: (index: number) => void;
  containerProps: {
    ref: RefObject<any>;
    onScroll: () => void;
    style: Partial<CSSProperties> & { overflowY: OverflowY };
  };
  wrapperProps: {
    style: {
      width: string;
      height: string;
      marginTop: string;
    };
  };
}

export default function useVirtualList<T = any>(
  list: T[] | undefined,
  options: UseVirtualListOptions,
): UseVirtualListReturn<T> {
  const { containerHeight = 300, itemHeight, overscan = 5 } = options;
  const [scrollTop, setScrollTop] = useState<number>(0);

  const totalHeight = useMemo(() => {
    if (!list) return 0;
    if (typeof itemHeight === 'number') {
      return list.length * itemHeight;
    }
    return list.reduce((acc, _, index) => acc + itemHeight(index), 0);
  }, [list, itemHeight]);

  const visibleCount = Math.ceil(
    containerHeight / (typeof itemHeight === 'number' ? itemHeight : 0),
  );
  const startIdx = Math.max(
    0,
    Math.floor(scrollTop / (typeof itemHeight === 'number' ? itemHeight : 0)) - overscan,
  );
  const endIdx = Math.min(list ? list.length - 1 : 0, startIdx + visibleCount + 2 * overscan);

  const visibleData = useMemo(() => {
    if (!list) return [];
    return list.slice(startIdx, endIdx + 1).map((data, index) => ({
      data,
      index: startIdx + index,
    }));
  }, [list, startIdx, endIdx]);

  const containerRef = useRef<any>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  };

  const scrollTo = (index: number) => {
    if (containerRef.current) {
      const itemHeightValue = typeof itemHeight === 'number' ? itemHeight : itemHeight(index);
      const scrollTop = index * itemHeightValue;
      containerRef.current.scrollTop = scrollTop;
    }
  };

  const containerProps = {
    ref: containerRef,
    onScroll: handleScroll,
    style: {
      height: `${containerHeight}px`,
      overflowY: 'auto',
    } as const,
  };

  const wrapperProps = {
    style: {
      width: '100%',
      height: `${totalHeight}px`,
      marginTop: `${startIdx * (typeof itemHeight === 'number' ? itemHeight : 0)}px`,
    },
  };

  return {
    list: visibleData,
    scrollTo,
    containerProps,
    wrapperProps,
  };
}
