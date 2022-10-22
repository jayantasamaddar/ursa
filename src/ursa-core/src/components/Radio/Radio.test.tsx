import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Radio.story';

const { DefaultRadioButton } = composeStories(stories);

describe('components/Radio', () => {
  describe('<DefaultRadioButton />', () => {
    it('Rendered in the DOM', () => {
      render(<DefaultRadioButton />);
      const prepaid = screen.getByLabelText('Prepaid');
      const cod = screen.getByLabelText('COD');
      expect(prepaid).toBeInTheDocument();
      expect(cod).toBeInTheDocument();
    });

    it('Radio Button Selected', () => {
      render(<DefaultRadioButton />);
      const prepaid = screen.getByLabelText('Prepaid');
      const cod = screen.getByLabelText('COD');
      fireEvent.click(prepaid);
      expect(prepaid).toHaveAttribute('aria-checked', 'true');
      expect(prepaid).toHaveAttribute('checked');
      expect(cod).toHaveAttribute('aria-checked', 'false');
    });
  });
});
