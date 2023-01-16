import { useState, useEffect } from 'react';

export interface CountdownOptions {
  /** Evaluating condition that pauses countdown */
  condition?: boolean;
  /** Callback when countdown is over */
  onDismiss?(): void;
}

/**
 * Takes in a timeout value and any possible offset and returns a countdown timer
 * @param timeout Takes a `number` in seconds. @default 5
 * @param offset Takes a `number` in seconds. @default 0.1
 * @param options `{` condition?: `boolean`, onDismiss?(): `void` `}`
 * @returns `number`
 */
export const useCountdown = (
  timeout: number = 5,
  offset: number = 0.1,
  options: CountdownOptions = {
    condition: undefined,
    onDismiss: undefined
  }
) => {
  const [duration, setDuration] = useState(timeout);
  const { condition, onDismiss } = options;

  useEffect(() => {
    if (condition) return;
    if (duration > 0) {
      const interval = setInterval(
        () => setDuration(duration - offset),
        offset * 1000
      );
      return () => clearInterval(interval);
    } else {
      onDismiss?.();
    }
  }, [duration, offset, condition, onDismiss]);

  const countdown = Math.max(
    ((duration - offset) / (timeout - offset)) * 100,
    0
  );

  // console.log({ countdown, duration });

  return { countdown, duration: Math.round(duration) };
};
