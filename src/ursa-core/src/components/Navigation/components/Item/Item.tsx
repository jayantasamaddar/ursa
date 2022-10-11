import styled from '@emotion/styled';
import React, {
  FC,
  ReactElement,
  ReactNode,
  useContext,
  MouseEvent
} from 'react';
import { UnstyledLink } from '../../../Link';
import { Icon, IconProps } from '../../../Icon';
import { NavigationContext } from '../../context';

export interface ItemURLProps {
  url?: string;
  matches?: boolean;
  exactMatch?: boolean;
  matchPaths?: string[];
  excludePaths?: string[];
  external?: boolean;
}

export interface SubNavigationItemProps extends ItemURLProps {
  url: string;
  label: string;
  disabled?: boolean;
  new?: boolean;
  onClick?: () => void;
}

interface SecondaryAction {
  url: string;
  accessibilityLabel: string;
  icon: IconProps['source'];
  onClick?: () => void;
  tooltip?: string;
}

export interface NavigationItemProps extends ItemURLProps {
  label: string;
  icon?: IconProps['source'];
  badge?: ReactNode;
  className?: string;
  disabled?: boolean;
  accessibilityLabel?: string;
  selected?: boolean;
  exactMatch?: boolean;
  new?: boolean;
  subNavigationItems?: SubNavigationItemProps[];
  secondaryAction?: SecondaryAction;
  onClick?(): void;
  onToggleExpandedState?(): void;
  expanded?: boolean;
  shouldResizeIcon?: boolean;
}

/***************************************************************************************/
// Functional Component: Begin
/***************************************************************************************/
const NavigationItem: FC<NavigationItemProps> = ({
  url,
  external,
  onClick,
  label,
  icon,
  className,
  subNavigationItems = [],
  secondaryAction
}): ReactElement => {
  /***************************************************************************************/
  // State Management
  /***************************************************************************************/
  const { location, onNavigationDismiss } = useContext(NavigationContext);

  const isNavigationItemActive = (
    navigationItem: NavigationItemProps,
    currentPath: string
  ) => {};

  /**************************************************************************************/
  // Event Handlers
  /**************************************************************************************/
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    const { currentTarget } = event;

    // If clicked navigation link is current location, do nothing and prevent refresh.
    if (currentTarget.getAttribute('href') === location) {
      event.preventDefault();
    }

    onClick && onClick();
  };

  /***************************************************************************************/
  // Secondary Navigation Markup
  /***************************************************************************************/

  let secondaryNavMarkup: ReactNode = null;

  if (subNavigationItems.length > 0) {
  }

  /***************************************************************************************/
  // Render JSX
  /***************************************************************************************/

  return (
    <UnstyledLink
      url={url || ''}
      external={external}
      className="Ursa-NavigationItemLink"
      onClick={handleClick}
    >
      <li className={`Ursa-NavigationItem ${className || ''}`}>
        <div className="Ursa-NavigationItemWrapper">
          {icon && (
            <div className="Ursa-NavigationIcon">
              <Icon source={icon} />
            </div>
          )}
          <span className="Ursa-NavigationLabel">{label}</span>
        </div>
      </li>
    </UnstyledLink>
  );
};

/***************************************************************************************/
// CSS-in-JS - Styled Component
/***************************************************************************************/

export const Item = styled(NavigationItem)(
  ({ theme: { color } }) => `
        list-style: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: ${color['--ursa-text-primary']};
        border-left: 4px solid ${color['--ursa-btn-primary']};
        padding-left: 10px;
        padding-right: 10px;
        div {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding-top: 4px;
            padding-bottom: 4px;
        }
        .Ursa-NavigationItemWrapper {
            width: 100%;
            padding-left: 20px;
            padding-right: 20px;
            border-radius: 4px;
            &:hover {
                background-color: ${color['--ursa-nav-item-bg-hovered']};                
            }
        }
    `
);
