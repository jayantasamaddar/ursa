import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '../ThemeProvider';
import { Button } from './Button';

describe('components/Button', () => {
  describe('Renders Button', () => {
    it('Renders Default Button', () => {
      render(
        <ThemeProvider>
          <Button>Button</Button>
        </ThemeProvider>
      );
      const buttonEl = screen.getByRole('button');
      expect(buttonEl).toBeInTheDocument();
    });
    it('Renders Primary Button', () => {
      render(
        <ThemeProvider>
          <Button primary>Button</Button>
        </ThemeProvider>
      );
      const buttonEl = screen.getByRole('button');
      expect(buttonEl).toBeInTheDocument();
    });
  });
});
