import { Keyframes } from '@emotion/react';
import { Animate } from './Animate';
import type { AnimationProps, AnimationTimingFunction } from './types';

/**
 * A React Hook that quickly scaffolds Animations that can be used directly
 * with `Emotion.js` or `styled-components`
 * @param AnimationProps
 * @returns `{` animation: `string` } | `undefined`
 * 
 * Syntax
 * -------
 
 ```js
 useAnimate({
    enter: 'fadeIn',
    enterFrom: undefined,
    enterTo: undefined,
    enterDuration: 0.2, // in seconds
    enterTimingFunction: 'ease-in-out',
    enterDelay: 0, // in seconds
    enterFillMode: 'forwards',
    enterDirection: 'reverse',
    enterIterationCount: 1,
    exit: 'fadeOut',
    exitFrom: undefined,
    exitTo: undefined,
    exitDuration: 0.2, // in seconds
    exitTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
    exitDelay: 0, // in seconds
    exitFillMode: 'forwards',
    exitDirection: 'reverse',
    exitIterationCount: 1,
 })
 ```
 */
export const useAnimate = ({
  enter,
  enterFrom,
  enterTo,
  enterDuration,
  enterTimingFunction,
  enterDelay,
  enterFillMode,
  enterDirection,
  exit,
  exitFrom,
  exitTo,
  enterIterationCount,
  exitDuration,
  exitTimingFunction,
  exitDelay,
  exitFillMode,
  exitDirection,
  exitIterationCount
}: AnimationProps) => {
  const animationEnterProps: (Keyframes | AnimationTimingFunction | string)[] =
    [];
  const animationExitProps: (Keyframes | AnimationTimingFunction | string)[] =
    [];
  const animationEnter = new Animate(enter);
  const animationExit = exit ? new Animate(exit) : undefined;
  const enterKeyframes = animationEnter.getKeyframes(enterFrom, enterTo);
  if (!enterKeyframes) return;

  animationEnterProps.unshift(enterKeyframes.toString());
  console.log({ enterKeyframes: enterKeyframes });
  animationEnterProps.push(
    `${
      enterDuration && enterDuration > 0
        ? enterDuration
        : animationEnter.duration
    }s`
  );
  animationEnterProps.push(
    enterTimingFunction || animationEnter.timingFunction
  );
  enterDelay && animationEnterProps.push(`${enterDelay}s`);
  animationEnterProps.push(enterFillMode || animationEnter.fillMode);
  enterDirection &&
    animationEnterProps.push(enterDirection || animationEnter.direction);
  enterIterationCount &&
    enterIterationCount > 0 &&
    animationEnterProps.push(enterIterationCount.toString());

  if (!exit) return animationEnterProps.join(' ');

  switch (exit) {
    default:
      if (!animationExit) break;
      else {
        const exitKeyframes = animationExit.getKeyframes(exitFrom, exitTo);
        if (!exitKeyframes) return;
        animationExitProps.unshift(exitKeyframes.toString());
        animationExitProps.push(
          `${
            exitDuration && exitDuration > 0
              ? exitDuration
              : animationExit.duration
          }s`
        );
        animationExitProps.push(
          exitTimingFunction || animationExit.timingFunction
        );
        exitDelay && animationExitProps.push(`${exitDelay}s`);
        animationExitProps.push(exitFillMode || animationExit.fillMode);
        exitDirection &&
          animationExitProps.push(exitDirection || animationExit.direction);
        exitIterationCount &&
          exitIterationCount > 0 &&
          animationEnterProps.push(exitIterationCount.toString());
      }
      break;
  }
  /** Build the animation string if `exit` props are present */
  return `${animationEnterProps.join(' ')}, ${animationExitProps.join(' ')}`;
};
