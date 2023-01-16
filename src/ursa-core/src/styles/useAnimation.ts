import { Keyframes, keyframes } from '@emotion/react';

type CommonAnimationValues =
  | 'initial'
  | 'inherit'
  | 'revert'
  | 'revert-layer'
  | 'unset';

type AnimationPreset =
  | 'fadeIn'
  | 'fadeOut'
  | 'fillX'
  | 'fillY'
  | 'zoomIn'
  | 'zoomOut'
  | 'zoomInOut'
  | 'slideInTop'
  | 'slideInLeft'
  | 'slideInBottom'
  | 'slideInRight'
  | 'slideOutTop'
  | 'slideOutLeft'
  | 'slideOutBottom'
  | 'slideOutRight'
  | 'bounceInTop'
  | 'bounceInRight'
  | 'bounceInLeft'
  | 'bounceInBottom';

type AnimationTimingFunction =
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | string;

type AnimationFillMode =
  | 'none'
  | 'forwards'
  | 'backwards'
  | 'both'
  | 'none, backwards'
  | 'both, forwards, none'
  | CommonAnimationValues;

type AnimationDirection =
  | 'normal'
  | 'reverse'
  | 'alternate'
  | 'alternate-reverse'
  | 'normal, reverse'
  | 'alternate, reverse, normal'
  | CommonAnimationValues;

type AnimationIterationCount = number | 'infinite' | CommonAnimationValues;

interface AnimationProps {
  enter: AnimationPreset;
  enterFrom?: number;
  enterTo?: number;
  enterDuration?: number;
  enterTimingFunction?: AnimationTimingFunction;
  enterDelay?: number;
  enterFillMode?: AnimationFillMode;
  enterDirection?: AnimationDirection;
  enterIterationCount?: AnimationIterationCount;
  exit?: AnimationPreset;
  exitFrom?: number;
  exitTo?: number;
  exitDuration?: number;
  exitTimingFunction?: AnimationTimingFunction;
  exitDelay?: number;
  exitFillMode?: AnimationFillMode;
  exitDirection?: AnimationDirection;
  exitIterationCount?: AnimationIterationCount;
}

/**
 * Allows the user to access the Animation preset available in the
 * `@zenius-one/ursa-animation` library.
 */
export class UrsaAnimation {
  name: AnimationPreset;
  duration: number;
  timingFunction: AnimationTimingFunction;
  fillMode: AnimationFillMode;
  direction: AnimationDirection;

  constructor(name: AnimationPreset) {
    this.name = name;
    this.duration = 0.2;
    this.timingFunction = this.getTimingFunction();
    this.fillMode = this.getFillMode();
    this.direction = 'normal';
  }

  /**
   * Returns the Keyframes preset of the given Animation
   * @returns `Keyframes` | `undefined`
   */
  getKeyframes(from?: number, to?: number) {
    let KEYFRAMES: Keyframes | undefined;
    switch (this.name) {
      case 'fadeIn':
        KEYFRAMES = keyframes({
          from: { opacity: from ?? 0 },
          to: { opacity: to ?? 1 }
        });
        break;

      case 'fadeOut':
        KEYFRAMES = keyframes({
          from: { opacity: from ?? 1 },
          to: { opacity: to ?? 0 }
        });
        break;

      case 'fillX':
        KEYFRAMES = keyframes({
          from: { transform: `scaleX(0)` },
          to: { transform: `scaleX(${to ?? 100}%)` }
        });
        break;

      case 'fillY':
        KEYFRAMES = keyframes({
          from: { transform: `scaleY(0)` },
          to: { transform: `scaleY(${to ?? 100}%)` }
        });
        break;

      case 'zoomIn':
        KEYFRAMES = keyframes({
          from: { transform: 'scale(0)' },
          to: { transform: 'scale(1)' }
        });
        break;

      case 'zoomOut':
        KEYFRAMES = keyframes({
          from: { transform: 'scale(1)' },
          to: { transform: 'scale(0)' }
        });
        break;

      case 'zoomInOut':
        KEYFRAMES = keyframes({
          '0%': { transform: 'scale(0)' },
          '2%': { transform: 'scale(1)' },
          '98%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' }
        });
        break;

      case 'slideInLeft':
        KEYFRAMES = keyframes({
          from: { transform: 'translateX(-2000px)' },
          to: { transform: 'translateX(0)' }
        });
        break;

      case 'slideOutLeft':
        KEYFRAMES = keyframes({
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-2000px)' }
        });
        break;

      case 'slideInRight':
        KEYFRAMES = keyframes({
          from: { transform: 'translateX(2000px)' },
          to: { transform: 'translateX(0)' }
        });
        break;

      case 'slideOutRight':
        KEYFRAMES = keyframes({
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(2000px)' }
        });
        break;

      case 'slideInTop':
        KEYFRAMES = keyframes({
          from: { transform: 'translateY(-2000px)' },
          to: { transform: 'translateY(0)' }
        });
        break;

      case 'slideOutTop':
        KEYFRAMES = keyframes({
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-2000px)' }
        });
        break;

      case 'slideInBottom':
        KEYFRAMES = keyframes({
          from: { transform: 'translateY(2000px)' },
          to: { transform: 'translateY(0)' }
        });
        break;

      case 'slideOutBottom':
        KEYFRAMES = keyframes({
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(2000px)' }
        });
        break;

      case 'bounceInTop':
        KEYFRAMES = keyframes({
          '0%': { transform: 'translateY(-200%)' },
          '70%': { transform: 'translateY(20px)' },
          '80%': { transform: 'translateY(-15px)' },
          '90%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translateY(0)' }
        });
        break;

      case 'bounceInBottom':
        KEYFRAMES = keyframes({
          '0%': { transform: 'translateY(200%)' },
          '70%': { transform: 'translateY(-30%)' },
          '80%': { transform: 'translateY(22.5%)' },
          '90%': { transform: 'translateY(-15%)' },
          '100%': { transform: 'translateY(0)' }
        });
        break;

      default:
        break;
    }
    return KEYFRAMES;
  }

  /**
   * Returns the Animation Timing Function preset for the given animation
   * @returns `AnimationTimingFunction`
   */
  private getTimingFunction() {
    switch (this.name) {
      case 'fadeIn':
      case 'fadeOut':
        return 'ease-in-out';

      case 'fillX':
      case 'fillY':
        return 'ease';

      case 'slideInTop':
      case 'slideInRight':
      case 'slideInBottom':
      case 'slideInLeft':
      case 'slideOutTop':
      case 'slideOutLeft':
      case 'slideOutBottom':
      case 'slideOutRight':
        return 'ease';

      case 'zoomIn':
      case 'zoomOut':
      case 'zoomInOut':
        return 'ease-in-out';

      default:
        return 'linear';
    }
  }

  private getFillMode(): AnimationFillMode {
    switch (this.name) {
      default:
        return 'forwards';
    }
  }
}
/**

 *
 */

/**
 * A React Hook that quickly scaffolds Animations that can be used directly
 * with `Emotion.js` or `styled-components`
 * @param AnimationProps
 * @returns `{` animation: `string` } | `undefined`
 * 
 * Syntax
 * -------
 
 ```js
 useAnimation({
    enter: 'fadeIn'
    enterDuration: 0.2, // in seconds
    enterTimingFunction: 'ease-in-out',
    enterDelay: 0, // in seconds
    enterFillMode: 'forwards',
    enterDirection: 'reverse',
    enterIterationCount: 1,
    exit: 'fadeOut',
    exitDuration: 0.2, // in seconds
    exitTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
    exitDelay: 0, // in seconds
    exitFillMode: 'forwards',
    exitDirection: 'reverse',
    exitIterationCount: 1,
    infinite: true
 })
 ```
 */
export const useAnimation = ({
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
  const animationEnter = new UrsaAnimation(enter);
  const animationExit = exit ? new UrsaAnimation(exit) : undefined;
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
