import { Keyframes, keyframes } from '@emotion/react';
import type {
  AnimationPreset,
  AnimationTimingFunction,
  AnimationFillMode,
  AnimationDirection
} from './types';

/**
 * Allows the user to access the Animation preset available in the
 * `@zenius-one/ursa-animation` library.
 */
export class Animate {
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

      case 'bounceInRight':
        KEYFRAMES = keyframes({
          '0%': { transform: 'translateX(-200%)' },
          '70%': { transform: 'translateX(20px)' },
          '80%': { transform: 'translateX(-15px)' },
          '90%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' }
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

      case 'bounceInLeft':
        KEYFRAMES = keyframes({
          '0%': { transform: 'translateX(200%)' },
          '70%': { transform: 'translateX(-30%)' },
          '80%': { transform: 'translateX(22.5%)' },
          '90%': { transform: 'translateX(-15%)' },
          '100%': { transform: 'translateX(0)' }
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
