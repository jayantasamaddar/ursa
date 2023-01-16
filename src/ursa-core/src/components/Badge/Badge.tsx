import styled from '@emotion/styled';
import React, { FC, ReactElement, ReactNode } from 'react';

export interface BadgeProps {
  /** The main display content for the badge */
  children?: ReactNode;
  /** The className attribute of the Badge component */
  className?: string;
  badgeContent?: number;
  color?: string;
  invisible?: boolean;
  showZero?: boolean;
  /** The maximum number before the badge content truncates */
  max?: number;
  variant?: 'dot' | 'text' | 'outline';
  anchorOrigin?: {
    horizontal: 'top' | 'right' | 'bottom' | 'left';
    vertical: 'top' | 'right' | 'bottom' | 'left';
  };
}

const UrsaBadge = ({
  children,
  className,
  badgeContent,
  color,
  invisible,
  showZero,
  max,
  variant,
  anchorOrigin
}: BadgeProps): ReactElement => {
  const content =
    badgeContent && max && badgeContent > max ? `${max}+` : badgeContent;

  return (
    <div className={`Ursa-BadgeContainer ${className || ''}`}>
      {children && <div className="Ursa-BadgeComponent">{children}</div>}
      {!invisible && (
        <div className="Ursa-Badge">
          {variant === 'dot' ? null : (
            <div className="Ursa-BadgeContent">{content}</div>
          )}
        </div>
      )}
    </div>
  );
};

export const Badge = styled(UrsaBadge)(
  ({
    theme: { color, fontSize, border },
    color: badgeColor,
    children,
    variant
  }) => `
  cursor: pointer;
  display: inline-flex;
  position: relative;

    .Ursa-Badge {
      display: flex;
      position: ${!children ? 'static' : 'absolute'};;
      bottom: ${!children ? 0 : '0.2em'};
      left: ${!children ? 0 : '0.3em'};
      align-items: center;
      justify-content: center;
      padding: 5px;
      min-width: ${variant === 'dot' ? '10px' : '22px'};
      min-height: ${variant === 'dot' ? '10px' : '22px'};
      z-index: 1;
      border-radius: ${border['--ursa-border-radius-full']};
      background-color: ${badgeColor ? badgeColor : color['--ursa-btn-alert']};
      transform: scale(0.9);

      & > .Ursa-BadgeContent {
        font-size: ${fontSize['--ursa-font-size-1']};
        font-weight: bold;
        color: ${color['--ursa-white']};
      }
    }
  `
);
