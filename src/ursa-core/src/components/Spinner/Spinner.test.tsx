import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import * as stories from './Spinner.story'; // import all stories from the stories file

const { DefaultSpinner, SmallSpinner } = composeStories(stories);

describe('components/Spinner', () => {
  it('Renders Default Spinner', () => {
    render(<DefaultSpinner />);
    const svgEl = screen.getByTestId('spinner');
    expect(svgEl).not.toBeNull();
    expect(svgEl).toHaveAttribute('height', '32');
    expect(svgEl).toHaveAttribute('width', '32');
  });
  it('Renders Small Spinner with Color', () => {
    const props = {
      color: 'darkred'
    };
    render(<SmallSpinner {...props} />);
    const svgEl = screen.getByTestId('spinner');
    expect(svgEl).not.toBeNull();
    expect(svgEl).toHaveAttribute('height', '16');
    expect(svgEl).toHaveAttribute('width', '16');
    expect(svgEl).toHaveAttribute('fill', SmallSpinner.args.color);
  });
});
