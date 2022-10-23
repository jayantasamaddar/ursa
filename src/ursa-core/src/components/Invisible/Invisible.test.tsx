import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import * as stories from './Invisible.story';
import { composeStories } from '@storybook/testing-react';

const { DefaultInvisible } = composeStories(stories);

describe('components/Invisible', () => {
  describe('<Invisible />', () => {
    it('Run Snapshot Test', () => {
      const InvisibleEl = renderer.create(<DefaultInvisible />).toJSON();
      expect(InvisibleEl).toMatchSnapshot();
    });

    it('Title is Invisible', () => {
      render(<DefaultInvisible />);
      const headingEl = screen.getByText('This Title is Hidden');
      const inputEl = screen.getByLabelText('Email');
      expect(headingEl).toBeInTheDocument();
      expect(headingEl).not.toBeVisible();
      expect(inputEl).toBeInTheDocument();
      expect(inputEl).toBeVisible();
    });
  });
});
