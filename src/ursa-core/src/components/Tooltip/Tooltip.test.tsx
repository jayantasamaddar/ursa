import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Tooltip.story';

const { DefaultTooltip } = composeStories(stories);

describe('components/Tooltip', () => {
  describe('<DefaultTooltip />', () => {
    it('Rendered in the DOM', () => {
      render(<DefaultTooltip />);
      const buttonEl = screen.getByRole('button');
      fireEvent.mouseOver(buttonEl);
      const tooltipEl = screen.getByRole('tooltip');
      expect(tooltipEl).toBeInTheDocument();
    });
    it('Run callback onClose', () => {
      const mockOnClose = jest.fn();
      render(<DefaultTooltip onClose={mockOnClose} />);
      const buttonEl = screen.getByRole('button');
      fireEvent.mouseOver(buttonEl);
      const tooltipEl = screen.getByRole('tooltip');
      expect(tooltipEl).toBeInTheDocument(); // Tooltip is in the document when element hovered
      fireEvent.mouseLeave(buttonEl); // Unhover element
      expect(mockOnClose).toHaveBeenCalledTimes(1); // onClose function executed
      expect(tooltipEl).not.toBeInTheDocument(); // Tooltip not in the document
    });
  });
});
