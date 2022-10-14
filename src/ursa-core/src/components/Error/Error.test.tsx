import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Error.story';

const { BasicError } = composeStories(stories);

describe('components/Error', () => {
  describe('Test Basic Error', () => {
    it('Renders Error in the DOM', () => {
      render(<BasicError>Error</BasicError>);
      const errorEl = screen.getByRole('alert');
      expect(errorEl).toBeInTheDocument();
      expect(errorEl).toHaveTextContent(/^Error$/);
    });
  });
});
