import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Error.story';

const { BasicError, ErrorWithAlertIcon } = composeStories(stories);

describe('components/Error', () => {
  describe('<BasicError />', () => {
    it('Renders Error in the DOM', () => {
      render(<BasicError>Error</BasicError>);
      const errorEl = screen.getByRole('alert');
      expect(errorEl).toBeInTheDocument();
      expect(errorEl).toHaveTextContent(/^Error$/);
    });
    it('Alert Icon is present', () => {
      render(<ErrorWithAlertIcon />);
      if (ErrorWithAlertIcon.args?.icon) {
        const iconEl = screen.getByTestId('icon-external');
        expect(iconEl).toBeInTheDocument();
      }
    });
  });
});
