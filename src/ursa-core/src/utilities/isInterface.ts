import { isValidElement, ReactNode } from 'react';

/** Used to determine if passed argument is an interface and not a React Element */
export function isInterface<T>(x: T | ReactNode): x is T {
  return !isValidElement(x) && x !== undefined;
}
