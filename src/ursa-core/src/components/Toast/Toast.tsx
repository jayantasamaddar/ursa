import React, { ReactElement, ReactNode, useState } from 'react';
import styled from '@emotion/styled';

import { Portal } from '../Portal';
import { Icon } from '../Icon';
import {
  InfoMinor,
  AlertMinor,
  MobileCancelMajor
} from '@zenius-one/ursa-icons';
import { ProgressBar, useCountdown } from '../ProgressBar';
import { useAnimation } from '../../styles/useAnimation';

type ToastPosition =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center';

type ToastType = 'info' | 'success' | 'warning' | 'error' | 'default';

export interface ToastProps {
  /** The content to show inside the Toast */
  children: ReactNode;
  /** The position of the Toast */
  position?: ToastPosition;
  /** The type of Toast */
  type?: ToastType;
  /** The callback when Toast is closed */
  onDismiss?: () => void;
  /** The duration the Toast should display for */
  duration?: number;
  /** Whether or not Toast is draggable */
  draggable?: boolean;
  /** Whether or not the Toast closes on click */
  closeOnClick?: boolean;
  /** Whether or not the countdown for the Toast to close pauses when hovered */
  pauseOnHover?: boolean;
  /** Whether or not a progress bar is displayed */
  progress?: boolean;
  /** The `className` attribute of the Toast */
  className?: string;
}

const UrsaToast = ({
  children,
  duration = 5,
  pauseOnHover,
  onDismiss,
  progress,
  className
}: ToastProps): ReactElement => {
  const [hover, setHover] = useState(false);

  const { countdown, duration: TTL } = useCountdown(duration, 0.1, {
    condition: pauseOnHover && hover,
    onDismiss
  });

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  const progressMarkup = progress ? (
    <ProgressBar
      className="Ursa-ToastCountdown"
      progress={countdown}
      size="small"
      preset="countdown"
    />
  ) : undefined;

  const contentMarkup = children ? (
    <span className="Ursa-ToastContent">
      {children} - (Closing in {TTL}s)
    </span>
  ) : undefined;

  return (
    <Portal idPrefix="Ursa-ToastPortal">
      <div className={`Ursa-ToastContainer ${className || ''}`}>
        <div
          className="Ursa-Toast"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {contentMarkup}
          {progressMarkup}
          <Icon
            source={MobileCancelMajor}
            className="Ursa-ToastClose"
            size="medium"
            onClick={onDismiss}
          />
        </div>
      </div>
    </Portal>
  );
};

export const Toast = styled(UrsaToast)(
  ({ theme: { color, animation }, duration = 5, position, pauseOnHover }) => {
    const computedWrapperPosition: {
      top?: number | string;
      left?: number | string;
      right?: number | string;
      bottom?: number | string;
    } = {};

    switch (position) {
      case 'top-left':
        computedWrapperPosition.top = '2rem';
        computedWrapperPosition.left = '2rem';
        break;
      case 'top-right':
        computedWrapperPosition.top = '2rem';
        computedWrapperPosition.right = '2rem';
        break;
      case 'top-center':
        computedWrapperPosition.top = '2rem';
        computedWrapperPosition.left = '25%';
        computedWrapperPosition.right = '25%';
        break;
      case 'bottom-left':
        computedWrapperPosition.bottom = '2rem';
        computedWrapperPosition.left = '2rem';
        break;
      case 'bottom-right':
        computedWrapperPosition.bottom = '2rem';
        computedWrapperPosition.right = '2rem';
        break;
      default:
        // defaults to `bottom-center`
        computedWrapperPosition.bottom = '2rem';
        computedWrapperPosition.left = '25%';
        computedWrapperPosition.right = '25%';
        break;
    }

    // const { bounceInBottom, slideInBottom, slideOutBottom } = useAnimation();
    const toastAnimation = useAnimation({
      enter: 'bounceInBottom',
      enterDuration: 0.3,
      enterTimingFunction: 'ease-in-out',
      exit: 'slideOutBottom',
      exitTimingFunction: 'ease-in-out',
      exitDuration: 0.2,
      exitDelay: duration + 0.1
    });

    return {
      position: 'absolute',
      ...computedWrapperPosition,
      // ${slideInBottom} 0.3s ${
      //   animation.timing['--ursa-animation-timing-slider']
      // } forwards
      // animation: `${bounceInBottom} 0.3s ${
      //   animation.timing['--ursa-animation-timing-slider']
      // } forwards,
      // ${slideOutBottom} 0.3s ease-in-out ${duration + 0.1}s forwards`,
      animation: toastAnimation,

      '&:hover': {
        animationPlayState: pauseOnHover ? 'paused' : undefined
      },

      '& > .Ursa-Toast': {
        position: 'relative',
        cursor: 'pointer',
        backgroundColor: color['--ursa-black'],
        color: color['--ursa-white'],
        borderRadius: '0.25rem',
        padding: '1.25rem',
        width: '480px',
        textAlign: 'center',
        margin: '0 auto',

        '& > .Ursa-ToastCountdown': {
          position: 'absolute',
          bottom: 0,
          left: 0,
          borderBottomLeftRadius: '0.25rem',
          borderBottomRightRadius: '0.25rem'
        },

        '& > .Ursa-ToastClose': {
          position: 'absolute',
          cursor: 'pointer',
          top: '0.625rem',
          right: '0.625rem',
          zIndex: 50,
          color: color['--ursa-text-secondary'],
          transition: 'color 0.15s ease-in-out',

          '&:hover': {
            color: color['--ursa-white']
          }
        }
      }
    };
  }
);
