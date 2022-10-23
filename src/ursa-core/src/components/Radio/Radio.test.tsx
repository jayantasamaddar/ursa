import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Radio.story';

const { DefaultRadioButton, DisabledRadioButton } = composeStories(stories);

describe('components/Radio', () => {
  describe('<DefaultRadioButton />', () => {
    it('Rendered in the DOM', () => {
      render(<DefaultRadioButton />);
      const prepaid = screen.getByLabelText('Prepaid');
      const cod = screen.getByLabelText('COD');
      expect(prepaid).toBeInTheDocument();
      expect(cod).toBeInTheDocument();
    });
    it('Run Snapshot Test', () => {
      const radioEl = renderer.create(<DefaultRadioButton />).toJSON();
      expect(radioEl).toMatchSnapshot();
    });
    it('Radio Button Toggle', () => {
      render(<DefaultRadioButton />);
      const prepaid = screen.getByLabelText('Prepaid') as HTMLInputElement;
      const cod = screen.getByLabelText('COD') as HTMLInputElement;

      /** Toggle to Prepaid */
      fireEvent.click(prepaid);
      expect(prepaid.checked).toBeTruthy();
      expect(prepaid).toHaveAttribute('aria-checked', 'true');
      expect(cod.checked).toBeFalsy();
      expect(cod).toHaveAttribute('aria-checked', 'false');

      /** Toggle to COD */
      fireEvent.click(cod);
      expect(cod.checked).toBeTruthy();
      expect(cod).toHaveAttribute('aria-checked', 'true');
      expect(prepaid.checked).toBeFalsy();
      expect(prepaid).toHaveAttribute('aria-checked', 'false');
    });
    it('Radio Button Help Text', () => {
      render(<DefaultRadioButton />);
      const helpTextEl = screen.getByText(/^Cash on Delivery orders$/);
      expect(helpTextEl).toHaveTextContent(/^Cash on Delivery orders$/);
    });
  });

  describe('<DisabledRadioButton />', () => {
    it('Run Snapshot Test', () => {
      const tree = renderer.create(<DisabledRadioButton />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('Disabled attribute functional', () => {
      render(<DisabledRadioButton />);
      const l = screen.getByLabelText('L') as HTMLInputElement;
      const xl = screen.getByLabelText('XL') as HTMLInputElement;
      const xxl = screen.getByLabelText('XXL') as HTMLInputElement;
      expect(l).not.toHaveAttribute('disabled');
      expect(xl).toHaveAttribute('disabled');
      expect(xxl).toHaveAttribute('disabled');

      /** Clicking Buttons do not change disabled state */
      fireEvent.click(l);
      fireEvent.click(xl);
      expect(xl.checked).toBeFalsy();
      expect(xl).not.toHaveAttribute('aria-checked', 'true');
    });
  });
});
