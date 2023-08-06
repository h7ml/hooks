import { useHover } from '@dext7r/hooks';
import { useRef } from 'react';

export default () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const isHovered = useHover(elementRef);

  return (
    <>
      <div
        ref={elementRef}
        style={{ width: 200, height: 100, background: isHovered ? 'red' : 'blue' }}
      >
        {isHovered ? 'Hovering' : 'Not Hovering'}
      </div>
    </>
  );
};
