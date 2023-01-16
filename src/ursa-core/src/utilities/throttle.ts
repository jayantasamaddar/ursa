export const throttle = <T extends (...args: any[]) => any>(
  cb: T,
  delay: number = 100
) => {
  let shouldWait = false;
  let waitArgs: any[] | null;
  const timeoutFn = () => {
    if (waitArgs === null) {
      shouldWait = false;
    } else {
      cb(...waitArgs);
      waitArgs = null;
      setTimeout(timeoutFn, delay);
    }
  };

  return (...args: any[]) => {
    if (shouldWait) {
      waitArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;

    setTimeout(timeoutFn, delay);
  };
};
