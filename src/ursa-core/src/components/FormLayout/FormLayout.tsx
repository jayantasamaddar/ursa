import React, { ReactNode, Children, NamedExoticComponent, memo } from 'react';
import styled from '@emotion/styled';
import { Group, Item } from './components';
import { isElementOfType, wrapWithComponent } from '../../utilities';

export interface FormLayoutProps {
  /** The elements in the Form Layout */
  children: ReactNode;
}

const StyledFormLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`;

const FormLayout = memo(({ children }) => {
  return (
    <StyledFormLayout className="Ursa-FormLayout">
      {Children.map(children, (child, index) => {
        if (isElementOfType(child, Group)) {
          return child;
        }
        return wrapWithComponent(child, Item, { key: index });
      })}
    </StyledFormLayout>
  );
}) as NamedExoticComponent<FormLayoutProps> & { Group: typeof Group };

FormLayout.Group = Group;

export { FormLayout };
