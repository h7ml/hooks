import { useEffect, useRef, useState } from "react";

const useHoverDirty = (elementRef: React.RefObject<HTMLElement>): boolean => {
  const [isHovered, setIsHovered] = useState(false);
  const isHoveredRef = useRef(false);

  const handleMouseOver = () => {
    if (!isHoveredRef.current) {
      setIsHovered(true);
      isHoveredRef.current = true;
    }
  };

  const handleMouseOut = () => {
    if (isHoveredRef.current) {
      setIsHovered(false);
      isHoveredRef.current = false;
    }
  };

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      element.addEventListener('mouseover', handleMouseOver);
      element.addEventListener('mouseout', handleMouseOut);
      return () => {
        element.removeEventListener('mouseover', handleMouseOver);
        element.removeEventListener('mouseout', handleMouseOut);
      };
    }
  }, [elementRef]);

  return isHovered;
};
export default useHoverDirty;
