import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Text.story';

const { Heading, Body, ColouredText, AlignedText, StyledText } =
  composeStories(stories);

describe('components/Text', () => {
  describe('<Heading />', () => {
    it('Rendered in the DOM', () => {
      render(<Heading />);
      const stackEl = screen.getByTestId('test-stack');
      expect(stackEl.childNodes.length).toStrictEqual(8);
    });
  });

  describe('<Body />', () => {
    it('Rendered in the DOM', () => {
      render(<Body />);
      const stackEl = screen.getByTestId('test-stack');
      expect(stackEl.childNodes.length).toStrictEqual(3);
    });
  });

  describe('<ColouredText />', () => {
    it('Rendered in the DOM', () => {
      render(<ColouredText />);
      const stackEl = screen.getByTestId('test-stack');
      expect(stackEl.childNodes.length).toStrictEqual(5);
    });
  });

  describe('<AlignedText />', () => {
    it('Rendered in the DOM', () => {
      render(<AlignedText />);
      const stackEl = screen.getByTestId('test-stack');
      expect(stackEl.childNodes.length).toStrictEqual(4);
    });
  });

  describe('<StyledText />', () => {
    it('Rendered in the DOM', () => {
      render(<StyledText />);
      const stackEl = screen.getByTestId('test-stack');
      expect(stackEl.childNodes.length).toStrictEqual(10);
    });
  });
});
