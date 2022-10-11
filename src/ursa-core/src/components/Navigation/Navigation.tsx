import React, { FC, ReactElement, ReactNode, useContext, useMemo } from 'react';
import styled from '@emotion/styled';
import { NavigationContext } from './context';
import { Section, Item, NavigationItemProps } from './components';

interface NavigationProps {
  location: string;
  items: NavigationItemProps[];
  className?: string;
  children?: ReactNode;
  onDismiss?: () => void;
}

interface CompoundProps {
  Section: typeof Section;
}

const StyledNavigation = styled.div(
  ({ theme: { color } }) => `
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        width: 220px;
        height: 100%;
        max-width: 100%;
        min-height: calc(100vh - 2rem);
        border-right: 1px solid ${color['--ursa-border-secondary']};
        background-color: ${color['--ursa-nav-bg-primary']};
    `
);

export const Navigation: FC<NavigationProps> & CompoundProps = (
  props
): ReactElement => {
  const { className, children, location, onDismiss } = props;

  const context = useMemo(
    () => ({ location, onNavigationDismiss: onDismiss }),
    [location, onDismiss]
  );

  return (
    <NavigationContext.Provider value={context}>
      <StyledNavigation className={`Ursa-Navigation ${className || ''}`}>
        <nav className="Ursa-Navigation">{children}</nav>
      </StyledNavigation>
    </NavigationContext.Provider>
  );
};

Navigation.Section = Section;
