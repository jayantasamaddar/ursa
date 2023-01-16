import { RefObject, useState, useEffect } from 'react';
import { getElementOffset } from './getElementOffset';

/** Returns the `top` and `left` offset position of the element */
export const useOffsetPosition = (
  htmlRef: RefObject<HTMLElement>,
  offsetX: number = 0,
  offsetY: number = 0
) => {
  const [position, setPosition] = useState<{
    top: number;
    left: number;
  }>({ top: 0, left: 0 });

  /** Position Popover correctly  */
  useEffect(() => {
    const el = htmlRef.current;
    if (el) {
      const { top, left } = getElementOffset(el);
      setPosition({ top: top + offsetY, left: left + offsetX });
    }
  }, []);

  return { htmlRef, top: position.top, left: position.left };
};
