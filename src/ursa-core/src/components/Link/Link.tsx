import styled from '@emotion/styled';
import React, {
  FC,
  ReactElement,
  ReactNode,
  forwardRef,
  ForwardedRef
} from 'react';

import { Icon } from '../Icon';
import { ExternalSmallMinor } from '@zenius-one/ursa-icons';

export interface LinkProps {
  url: string;
  children?: ReactNode;
  external?: boolean;
  monochrome?: boolean;
  download?: string | boolean;
  [key: string]: any;
}

const UnstyledAnchorTag = styled.a(
  ({ theme: { color } }) => `
    text-decoration: none;
    color: ${color['--ursa-text-primary']};
  `
);

export const UnstyledLink: FC<LinkProps> = forwardRef(
  (props, ref: ForwardedRef<HTMLAnchorElement>): ReactElement => {
    const { external, url, children, ...rest } = props;
    const target = external ? '_blank' : undefined;
    const rel = external ? 'noopener noreferrer' : undefined;
    return (
      <span className="Ursa-LinkElement">
        <UnstyledAnchorTag
          className={`Ursa-AnchorTag`}
          ref={ref}
          target={target}
          href={url}
          rel={rel}
          {...rest}
        >
          {children}
          {external && (
            <span className="Ursa-ExternalLinkIcon">
              <Icon
                source={ExternalSmallMinor}
                size="large"
                color={'--ursa-link-primary'}
              />
            </span>
          )}
        </UnstyledAnchorTag>
      </span>
    );
  }
);

export const Link = styled(UnstyledLink)(
  ({ theme: { color }, monochrome }) => `
        display: inline-flex;
        align-items: center;
        gap: 5px;
        
        color: ${
          monochrome
            ? color['--ursa-text-primary']
            : color['--ursa-link-primary']
        };
        text-decoration: underline;

        &:hover {
            color: ${
              monochrome
                ? color['--ursa-text-primary']
                : color['--ursa-link-primary-hovered']
            };
            text-decoration: none;
        }        
    `
);
