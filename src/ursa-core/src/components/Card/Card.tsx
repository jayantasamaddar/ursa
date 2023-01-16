import React, {
  memo,
  NamedExoticComponent,
  ReactElement,
  ReactNode
} from 'react';
import styled from '@emotion/styled';
import { DisabledAction, ComplexAction } from '../../types';
import { CardHeader, CardSection } from './components';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';

export interface CardProps {
  /** The title of the Card */
  title?: ReactNode;
  /** `className` attribute of the Card */
  className?: string;
  /** The contents of the Card */
  children?: ReactNode;
  /** Whether to auto-wrap content into sections */
  sectioned?: boolean;
  /** Card Header actions */
  actions?: DisabledAction[];
  /** Card's Primary footer action */
  primaryFooterAction?: ComplexAction;
  /** Card's Secondary footer actions */
  secondaryFooterActions?: ComplexAction[];
  /** Footer actions' alignment */
  footerActionAlignment?: 'left' | 'right' | 'space-between';
}

const UrsaCard = ({
  title,
  className,
  children,
  sectioned,
  actions,
  primaryFooterAction,
  secondaryFooterActions
}: CardProps): ReactElement => {
  /*****************************************************************************************/
  /** Content Markup */
  /*****************************************************************************************/
  const headerMarkup: ReactElement<typeof CardHeader> | undefined =
    title || actions ? (
      <CardHeader title={title} actions={actions} />
    ) : undefined;

  const contentMarkup: ReactNode = sectioned ? (
    <CardSection>{children}</CardSection>
  ) : (
    children
  );

  const primaryFooterActionMarkup: ReactElement<typeof Button> | undefined =
    primaryFooterAction ? (
      <Button
        primary
        onClick={primaryFooterAction.onAction}
        {...primaryFooterAction}
      >
        {primaryFooterAction.label}
      </Button>
    ) : undefined;

  let secondaryFooterActionMarkup: ReactElement<typeof Button> | undefined;
  if (secondaryFooterActions?.length) {
    if (secondaryFooterActions.length === 1) {
      secondaryFooterActionMarkup = (
        <Button {...secondaryFooterActions[0]}>
          {secondaryFooterActions[0].label}
        </Button>
      );
    } else {
      /** This has to be fixed: Has to render multiple buttons in a Popover instead of 1 button */
      <Button {...secondaryFooterActions[0]}>
        {secondaryFooterActions[0].label}
      </Button>;
    }
  }

  const footerMarkup: ReactElement<HTMLDivElement> | undefined =
    primaryFooterActionMarkup || secondaryFooterActionMarkup ? (
      <div className="Ursa-CardFooter">
        <ButtonGroup>
          {secondaryFooterActionMarkup}
          {primaryFooterActionMarkup}
        </ButtonGroup>
      </div>
    ) : undefined;

  /*****************************************************************************************/
  /** Render Card */
  /*****************************************************************************************/
  return (
    <div className={`Ursa-Card ${className || ''}`}>
      {headerMarkup}
      {contentMarkup}
      {footerMarkup}
    </div>
  );
};

/*****************************************************************************************/
/** Styled Component */
/*****************************************************************************************/
const StyledCard = styled(UrsaCard)(
  ({ theme: { color, fontSize, border }, footerActionAlignment }) => {
    let justifyContent: 'flex-start' | 'flex-end' | 'space-between';
    switch (footerActionAlignment) {
      case 'left':
        justifyContent = 'flex-start';
        break;
      case 'space-between':
        justifyContent = 'space-between';
        break;
      default:
        justifyContent = 'flex-end';
        break;
    }

    return {
      borderRadius: border['--ursa-border-radius-xl'],
      backgroundColor: color['--ursa-white'],
      color: color['--ursa-black'],
      boxShadow:
        '0 0 0.3125rem rgb(23 24 25 / 10%), 0 0 0.625rem rgb(23 24 25 / 15%)',

      '& > .Ursa-CardFooter': {
        display: 'flex',
        alignItems: 'center',
        justifyContent,
        padding: '0 1.25rem 1.25rem'
      },

      '& h2, h3': {
        color: color['--ursa-black']
      },

      '& > .Ursa-CardSection + .Ursa-CardSection': {
        borderTop: `1px solid ${color['--ursa-btn-disabled']}`
      }
    };
  }
);
/*****************************************************************************************/
/** Memoized Composite Component */
/*****************************************************************************************/
const Card = memo((props) => {
  return <StyledCard {...props} />;
}) as NamedExoticComponent<CardProps> & {
  Header: typeof CardHeader;
  Section: typeof CardSection;
};

Card.Header = CardHeader;
Card.Section = CardSection;

export { Card };
