import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { matchers } from '@emotion/jest';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './ButtonGroup.story';

expect.extend(matchers);

const {
  DefaultButtonGroup,
  ButtonGroupWithSpacing,
  ButtonGroupWithJustification,
  FullWidth,
  Segmented,
  SegmentedButtonGroup_With_OutlineButtons
} = composeStories(stories);

interface CSSStyles {
  [property: string]: string;
}

/***************************************************************************/
/** Run Tests */
/***************************************************************************/

describe('components/ButtonGroup', () => {
  /***************************************************************************/
  /** Default Button Group */
  /***************************************************************************/

  describe('Test Default Button Group', () => {
    it('Snapshot Test Button Group', () => {
      const tree = renderer.create(<DefaultButtonGroup />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  /***************************************************************************/
  /** Button with Spacing */
  /***************************************************************************/

  describe('Test Button Group with Spacing', () => {
    it('Renders the Button Group with Spacing', () => {
      render(<ButtonGroupWithSpacing />);
      const buttonGroup = screen.getByRole('group');
      expect(buttonGroup).toBeInTheDocument();
    });

    it('Spacing styles are rendered correctly', () => {
      const spacing = ButtonGroupWithSpacing.args?.spacing;
      const buttonGroup = renderer.create(<ButtonGroupWithSpacing />).toJSON();
      expect(buttonGroup).toHaveStyleRule(
        'margin-left',
        spacing === 'extraTight'
          ? '0.3125rem'
          : spacing === 'loose'
          ? '1.25rem'
          : '0.625rem',
        {
          target: '.Ursa-ButtonItem:not(:first-of-type)'
        }
      );
    });
  });

  /***************************************************************************/
  /** Button Group with Justification */
  /***************************************************************************/

  describe('Test Button Group with Justification', () => {
    beforeEach(() => {
      render(<ButtonGroupWithJustification />);
    });
    it('Renders the Button Group with Justification', () => {
      const buttonGroup = screen.getByRole('group');
      expect(buttonGroup).toBeInTheDocument();
    });

    it('Justification styles are rendered correctly', () => {
      const justify = ButtonGroupWithJustification.args?.justify;
      const buttonGroup = screen.getByRole('group');
      if (!ButtonGroupWithSpacing.args?.segmented) {
        expect(buttonGroup).toHaveStyle({
          'justify-content':
            justify === 'end'
              ? 'flex-end'
              : justify === 'center'
              ? 'center'
              : justify === 'evenly'
              ? 'space-evenly'
              : justify === 'between'
              ? 'space-between'
              : justify === 'around'
              ? 'around'
              : 'flex-start'
        });
      }
    });
  });

  /***************************************************************************/
  /** Full Width Button Group  */
  /***************************************************************************/

  describe('Test Full Width Button Group', () => {
    it('Renders the Full Width Button Group', () => {
      render(<FullWidth />);
      const buttonGroup = screen.getByRole('group');
      expect(buttonGroup).toBeInTheDocument(); // Button Group is present in the DOM
      buttonGroup.querySelectorAll('.Ursa-ButtonItem').forEach((node) => {
        expect(node).toHaveStyle({ flex: '1 1 auto' }); // Full Width ButtonItem
      });
    });
  });

  /***************************************************************************/
  /** Segmented Button Group */
  /***************************************************************************/

  describe('Test Segmented Button Group', () => {
    it('Renders the Segmented Button Group', () => {
      render(<Segmented />);
      const buttonGroup = screen.getByRole('group');
      expect(buttonGroup).toBeInTheDocument(); // Button Group is present in the DOM
    });

    it('Segmented Styles: Justification should not work', () => {
      render(<Segmented />);
      const justifyStyles = [
        'flex-start',
        'flex-end',
        'center',
        'space-around',
        'space-evenly',
        'space-between'
      ];
      const buttonGroup = screen.getByRole('group');
      expect(buttonGroup).toHaveStyle({
        'justify-content': undefined
      });
    });

    it('Segmented Styles: The last item has border-radius only on the left', () => {
      const buttonGroup = renderer.create(<Segmented />).toJSON();
      const firstItemStyles: CSSStyles = {
        'border-top-right-radius': 'unset',
        'border-bottom-right-radius': 'unset'
      };
      const notfirstItemStyles: CSSStyles = {
        'border-top-left-radius': 'unset',
        'border-bottom-left-radius': 'unset'
      };

      // Border-radius on the right is unset
      for (const style in firstItemStyles) {
        expect(buttonGroup).toHaveStyleRule(style, firstItemStyles[style], {
          target: '.Ursa-ButtonItem:first-of-type>.Ursa-ButtonContainer>button'
        });
      }

      // Border-radius on the left is present
      for (const style in notfirstItemStyles) {
        expect(buttonGroup).not.toHaveStyleRule(
          style,
          notfirstItemStyles[style],
          {
            target:
              '.Ursa-ButtonItem:first-of-type>.Ursa-ButtonContainer>button'
          }
        );
      }
    });

    it('Segmented Styles: The middle items have no border-radius', () => {
      const buttonGroup = renderer.create(<Segmented />).toJSON();
      expect(buttonGroup).toHaveStyleRule('border-radius', 'unset', {
        target:
          '.Ursa-ButtonItem:nth-of-type(n+2):nth-last-of-type(n+2)>.Ursa-ButtonContainer>button'
      });
    });

    it('Segmented Styles: The last item has border-radius only on the right', () => {
      const buttonGroup = renderer.create(<Segmented />).toJSON();
      const lastItemStyles: CSSStyles = {
        'border-top-left-radius': 'unset',
        'border-bottom-left-radius': 'unset'
      };
      const notLastItemStyles: CSSStyles = {
        'border-top-right-radius': 'unset',
        'border-bottom-right-radius': 'unset'
      };

      // Border-radius on the left is unset
      for (const style in lastItemStyles) {
        expect(buttonGroup).toHaveStyleRule(style, lastItemStyles[style], {
          target: '.Ursa-ButtonItem:last-of-type>.Ursa-ButtonContainer>button'
        });
      }

      // Border-radius on the right is present
      for (const style in notLastItemStyles) {
        expect(buttonGroup).not.toHaveStyleRule(
          style,
          notLastItemStyles[style],
          {
            target: '.Ursa-ButtonItem:last-of-type>.Ursa-ButtonContainer>button'
          }
        );
      }
    });
  });

  /***************************************************************************/
  /** Segmented Button Group with Outline Buttons */
  /***************************************************************************/

  describe('Test Outline Buttons in a Segmented Group', () => {
    it('Snapshot Test Outline Buttons in a Segmented Group', () => {
      const buttonGroup = renderer
        .create(<SegmentedButtonGroup_With_OutlineButtons />)
        .toJSON();
      expect(buttonGroup).toMatchSnapshot();
    });
  });
});
