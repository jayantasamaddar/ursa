/** Get the `top` and `left` offset of the `HTMLElement` */
export const getElementOffset = (el: Element | null) => {
  let left = 0;
  let top = 0;
  while (
    el &&
    !isNaN((el as HTMLElement).offsetLeft) &&
    !isNaN((el as HTMLElement).offsetTop)
  ) {
    left += (el as HTMLElement).offsetLeft - el.scrollLeft;
    top += (el as HTMLElement).offsetTop - el.scrollTop;
    el = (el as HTMLElement).offsetParent;
  }
  return { top, left };
};
