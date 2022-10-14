import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Heading.story';

const { DefaultHeading } = composeStories(stories);

describe('components/Heading', () => {
  describe('Tests Heading (polymorphic component)', () => {
    it('Renders Default H2', () => {
      render(<DefaultHeading>Heading</DefaultHeading>);
      const headingEl = screen.getByText(/^Heading$/);
      expect(headingEl).not.toBeNull();
      expect(headingEl.nodeName.toLowerCase()).toMatch(/^h2$/);
    });
  });
  it('Renders a different Heading Tag', () => {
    const headingTag = 'h4';
    render(<DefaultHeading element={headingTag}>Heading</DefaultHeading>);
    const headingEl = screen.getByText(/^Heading$/);
    expect(headingEl).not.toBeNull();
    expect(headingEl.nodeName.toLowerCase()).toMatch(headingTag);
  });
});
