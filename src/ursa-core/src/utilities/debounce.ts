export const debounce = <T extends (this: unknown, ...args: any[]) => any>(
  cb: T,
  delay: number = 1000
) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};
