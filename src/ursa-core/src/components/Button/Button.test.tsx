import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import * as stories from './Button.story';
import { ThemeProvider } from '../ThemeProvider';
import { Button } from './Button';

const {
  Basic,
  Primary,
  Outline,
  Alert,
  Disabled,
  Loading,
  FullWidth,
  IconButton,
  IconOnlyButton,
  Upload_button_for_single_PDF_upload,
  Upload_Button_for_multiple_files,
  Outline_Button_with_External_Link
} = composeStories(stories);

describe('components/Button', () => {
  describe('Renders Button', () => {
    it('Renders Basic Button', () => {
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
