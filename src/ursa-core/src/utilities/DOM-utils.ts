/** Allowed Focusable Elements
 *
 * https://www.w3.org/TR/DOM-Level-2-HTML/html.html
 *
 * https://allyjs.io/data-tables/focusable.html
 *
 * https://stackoverflow.com/questions/1599660/which-html-elements-can-receive-focus
 */
const FOCUSABLE_ELEMENTS = [
  'input',
  'textarea',
  'select',
  'button',
  'a',
  'area'
];

/** Get the last childNode's lastChild */
export const getLastLastChild = (element: HTMLElement): HTMLElement => {
  return element.lastChild
    ? getLastLastChild(element.lastChild as HTMLElement)
    : element;
};

/** Get Last Element Sibling */
export const getLastSibling = (
  element?: HTMLElement
): HTMLElement | undefined => {
  if (!element) return undefined;
  else if (element.nextElementSibling) {
    return getLastSibling(element.nextElementSibling as HTMLElement);
  } else {
    return element;
  }
};

/** Get the first focusable element.
 *
 * Element should either be a `HTMLInputElement`,
 * `HTMLSelectElement`, `HTMLTextAreaElement`, `HTMLAnchorElement`, `HTMLButtonElement` and
 * `HTMLAreaElement`, or should be an element with `tabindex >= 0`
 */
export const getFirstFocusableElement = (
  element?: HTMLElement
): HTMLElement | undefined => {
  if (!element) return;
  const tag = element.nodeName.toLowerCase();
  const tabIndex = element.getAttribute('tabindex');
  if (
    FOCUSABLE_ELEMENTS.includes(tag) ||
    (tabIndex && parseInt(tabIndex) >= 0)
  ) {
    return element;
  } else {
    for (const node of Array.from(element.childNodes)) {
      return getFirstFocusableElement(node as HTMLElement);
    }
  }
};

/** Get the last focusable element.
 *
 * Element should either be a `HTMLInputElement`,
 * `HTMLSelectElement`, `HTMLTextAreaElement`, `HTMLAnchorElement`, `HTMLButtonElement` and
 * `HTMLAreaElement`, or should be an element with `tabindex >= 0`
 */
export const getLastFocusableElement = (
  element?: HTMLElement
): HTMLElement | undefined => {
  if (!element) return;
  const tag = element.nodeName.toLowerCase();
  const tabIndex = element.getAttribute('tabindex');
  if (
    FOCUSABLE_ELEMENTS.includes(tag) ||
    (tabIndex && parseInt(tabIndex) >= 0)
  ) {
    const lastSibling = getLastSibling(element.parentElement as HTMLElement);
    return getFirstFocusableElement(lastSibling as HTMLElement);
  } else {
    for (const node of Array.from(element.childNodes)) {
      return getLastFocusableElement(node as HTMLElement);
    }
  }
};

/** Whether or not Element is visible in current window view */
export const isElementInViewport = (element: HTMLElement) => {
  return element.offsetTop >= 0 && element.offsetTop < window.innerHeight;
};
