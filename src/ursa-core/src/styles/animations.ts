import { keyframes } from '@emotion/react';

/**
 * Syntax
 * -------
 *
 * useAnimation({
 *    enter: 'fadeIn'
 *    enterDuration: 0,
 *    enterTimingFunction: 'ease-in-out',
 *    enterDelay: 0,
 *    enterFillMode: 'forwards',
 *    exit: 'fadeOut',
 *    exitDuration: 0.15,
 *    exitTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
 *    exitDelay: 0,
 *    exitFillMode: 'forwards',
 *    infinite: true
 * })
 *
 */

export const useAnimation = (value?: string | number) => {
  const fadeIn = keyframes({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  const fadeOut = keyframes({
    from: {
      opacity: 1
    },
    to: {
      opacity: 0
    }
  });

  const fillX = keyframes({
    from: {
      transform: 'scaleX(0)'
    },
    to: {
      transform: `scaleX(${value}%)`
    }
  });

  const reverseFillX = keyframes({
    from: {
      transform: `scaleX(${value}%)`
    },
    to: {
      transform: `scaleX(0)`
    }
  });

  const fillY = keyframes({
    from: {
      transform: 'scaleY(0)'
    },
    to: {
      transform: `scaleY(${value}%)`
    }
  });

  const zoomIn = keyframes({
    from: {
      transform: 'scale(0)'
    },
    to: {
      transform: 'scale(1)'
    }
  });

  const zoomOut = keyframes({
    from: {
      transform: 'scale(1)'
    },
    to: {
      transform: 'scale(0)'
    }
  });

  const zoomInOut = keyframes({
    '0%': {
      transform: 'scale(0)'
    },
    '2%': {
      transform: 'scale(1)'
    },
    '98%': {
      transform: 'scale(1)'
    },
    '100%': {
      transform: 'scale(0)'
    }
  });

  const slideInLeft = keyframes({
    from: {
      transform: 'translateX(-2000px)'
    },
    to: {
      transform: 'translateX(0)'
    }
  });

  const slideOutLeft = keyframes({
    from: {
      transform: 'translateX(0)'
    },
    to: {
      transform: 'translateX(-2000px)'
    }
  });

  const slideInRight = keyframes({
    from: {
      transform: 'translateX(2000px)'
    },
    to: {
      transform: 'translateX(0)'
    }
  });

  const slideOutRight = keyframes({
    from: {
      transform: 'translateX(0)'
    },
    to: {
      transform: 'translateX(2000px)'
    }
  });

  /** */

  const slideInTop = keyframes({
    from: {
      transform: 'translateY(-2000px)'
    },
    to: {
      transform: 'translateY(0)'
    }
  });

  const slideOutTop = keyframes({
    from: {
      transform: 'translateY(0)'
    },
    to: {
      transform: 'translateY(-2000px)'
    }
  });

  const slideInBottom = keyframes({
    from: {
      transform: 'translateY(2000px)'
    },
    to: {
      transform: 'translateY(0)'
    }
  });

  const slideOutBottom = keyframes({
    from: {
      transform: 'translateY(0)'
    },
    to: {
      transform: 'translateY(2000px)'
    }
  });

  const bounceInBottom = keyframes({
    '0%': { transform: 'translateY(200%)' },
    '70%': { transform: 'translateY(-20px)' },
    '80%': { transform: 'translateY(15px)' },
    '90%': { transform: 'translateY(-10px)' },
    '100%': { transform: 'translateY(0)' }
  });

  return {
    fadeIn,
    fadeOut,
    fillX,
    reverseFillX,
    fillY,
    zoomIn,
    zoomOut,
    zoomInOut,
    slideInTop,
    slideInLeft,
    slideInBottom,
    slideInRight,
    slideOutTop,
    slideOutLeft,
    slideOutBottom,
    slideOutRight,
    bounceInBottom
  };
};
