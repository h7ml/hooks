import { useEffect, useRef, useState } from 'react';

interface Size {
  width: number;
  height: number;
}

const useMeasure = (): [React.RefObject<HTMLDivElement>, Size] => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        setSize({ width, height });
      }
    };

    handleResize(); // Initial size update
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return [ref, size];
};

export default useMeasure;
