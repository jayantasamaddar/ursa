import React, { FC, ReactElement, ReactNode } from 'react';
import styled from '@emotion/styled';

export interface AvatarProps {
  children?: ReactNode;
  className?: string;
  src?: string;
  alt?: string;
  variant?: 'rounded' | 'square';
  size?: 'small' | 'medium' | 'large';
  bgColor?: string;
}

const AvatarImage = styled.img(
  ({ width, height }) => `
        width: ${width || 'auto'};
        height: ${height || 'auto'};
    `
);

const UrsaAvatar: FC<AvatarProps> = (props): ReactElement => {
  const { children, className, src, alt } = props;

  let avatarType: 'image' | 'external' | 'placeholder';

  if (src) {
    avatarType = 'image';
  } else if (typeof children === 'string') {
    avatarType = 'placeholder';
  } else {
    avatarType = 'external';
  }

  const avatarMarkup = {
    image: <AvatarImage className="Ursa-AvatarImage" src={src} alt={alt} />,
    placeholder: (
      <span>
        {children ? (children as string).charAt(0).toUpperCase() : 'U'}
      </span>
    ),
    external: <span>{children}</span>
  };

  return (
    <div className={`Ursa-Avatar ${className || ''}`}>
      {avatarMarkup[avatarType]}
    </div>
  );
};

export const Avatar = styled(UrsaAvatar)(
  ({ theme: { color, border }, src, variant, size, bgColor }) => `
        width: ${
          size === 'small' ? '28px' : size === 'large' ? '112px' : '56px'
        };
        height: ${
          size === 'small' ? '28px' : size === 'large' ? '112px' : '56px'
        };
        border-radius: ${
          variant === 'square' ? 0 : border['--ursa-border-radius-full']
        };
        background-color: ${
          !src ? (bgColor ? bgColor : color['--ursa-card-img-bg']) : 'none'
        };
        & > img {
            border-radius: ${
              variant === 'square' ? 0 : border['--ursa-border-radius-full']
            };
            width: ${
              size === 'small' ? '28px' : size === 'large' ? '112px' : '56px'
            };
            height: ${
              size === 'small' ? '28px' : size === 'large' ? '112px' : '56px'
            };
        }

        & > span {
            display: flex;
            flex-grow: 1;
            justify-content: center;
            align-items: center;
            height: 100%;
            color: ${color['--ursa-text-primary']};
            font-weight: bold;
        }
    `
);
