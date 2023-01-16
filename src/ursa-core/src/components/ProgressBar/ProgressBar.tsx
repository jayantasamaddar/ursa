import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import { useAnimation } from '../../styles';

type Preset = 'countdown' | 'progress';

export interface ProgressBarProps {
  /** Current progress out of `100` */
  progress?: number;
  /** `className` attribute */
  className?: string;
  /** Size of the progress bar */
  size?: 'small' | 'medium' | 'large';
  /** Whether or not animation works */
  animated?: boolean;
  /** Whether borders are rounded */
  rounded?: boolean;
  /** Style of Progress bar */
  preset?: Preset;
}

const UnstyledProgress = styled.progress(() => ({
  position: 'absolute',
  top: 0,
  width: '1px !important',
  height: '1px !important',
  margin: '0 !important',
  padding: '0 !important',
  overflow: 'hidden !important',
  clipPath: 'inset(50%) !important',
  border: '0 !important',
  whiteSpace: 'nowrap'
}));

const UrsaProgressBar = ({
  progress,
  className
}: ProgressBarProps): ReactElement => {
  return (
    <div className={`Ursa-ProgressBar ${className || ''}`}>
      <UnstyledProgress className="Ursa-Progress" value={progress} max={100}>
        {progress}
      </UnstyledProgress>
      <div className="Ursa-ProgressBarIndicator"></div>
    </div>
  );
};

export const ProgressBar = styled(UrsaProgressBar)(
  ({
    theme: { color, animation },
    progress,
    size,
    preset = 'progress',
    animated = true,
    rounded
  }) => {
    const { fillX } = useAnimation(progress);
    const computedSize = size === 'small' ? 0.5 : size === 'large' ? 2 : 1;
    const computedTransform = `scaleX(${
      preset === 'countdown' || animated ? progress ?? 0 : 0
    }%)`;
    const computedAnimation = !animated
      ? 'unset'
      : preset === 'progress'
      ? `${fillX} 0.5s ease forwards`
      : undefined;

    return {
      position: 'relative',
      width: '100%',
      height: `${computedSize}rem`,
      borderRadius: rounded ? '0.825rem' : 'initial',
      backgroundColor: color['--ursa-neutral'],

      '& > .Ursa-ProgressBarIndicator': {
        transform: computedTransform,
        transformOrigin: '0 50%',
        height: 'inherit',
        borderRadius: 'inherit',
        backgroundColor: color['--ursa-accent-color'],
        transition:
          preset === 'countdown' ? 'transform 0.09s linear' : undefined,
        animation: computedAnimation
      }
    };
  }
);
