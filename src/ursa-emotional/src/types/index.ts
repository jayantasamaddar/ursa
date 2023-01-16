export type CommonAnimationValues =
  | 'initial'
  | 'inherit'
  | 'revert'
  | 'revert-layer'
  | 'unset';

export type AnimationPreset =
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

export type AnimationTimingFunction =
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | string;

export type AnimationFillMode =
  | 'none'
  | 'forwards'
  | 'backwards'
  | 'both'
  | 'none, backwards'
  | 'both, forwards, none'
  | CommonAnimationValues;

export type AnimationDirection =
  | 'normal'
  | 'reverse'
  | 'alternate'
  | 'alternate-reverse'
  | 'normal, reverse'
  | 'alternate, reverse, normal'
  | CommonAnimationValues;

export type AnimationIterationCount =
  | number
  | 'infinite'
  | CommonAnimationValues;

export interface AnimationProps {
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
