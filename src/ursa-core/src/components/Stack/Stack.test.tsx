import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Stack.story';

const { DefaultStack } = composeStories(stories);

describe('components/Stack', () => {
  describe('<DefaultStack />', () => {
    it('Rendered in the DOM', () => {
      render(<DefaultStack />);
      const stackEl = screen.getByTestId('test-stack');
      expect(stackEl).toBeInTheDocument();
    });
  });

  it('Run Snapshot Test', () => {
    const StackEl = renderer.create(<DefaultStack />).toJSON();
    expect(StackEl).toMatchSnapshot();
  });

  it('Styles are Rendered correctly', () => {
    render(<DefaultStack />);
    const wrap = DefaultStack.args?.wrap as boolean;
    const vertical = DefaultStack.args?.vertical as boolean;
    const align = DefaultStack.args?.align;
    const justify = DefaultStack.args?.justify;
    const spacing = DefaultStack.args?.spacing;

    const defaultStyles = {
      'flex-direction': vertical ? 'column' : 'row',
      'flex-wrap': wrap ? 'wrap' : 'nowrap',
      'align-items':
        align === 'baseline'
          ? 'baseline'
          : align === 'stretch'
          ? 'stretch'
          : align === 'end'
          ? 'flex-end'
          : align === 'start' || (vertical && !align)
          ? 'flex-start'
          : 'center',
      'justify-content':
        justify === 'evenly'
          ? 'space-evenly'
          : justify === 'between'
          ? 'space-between'
          : justify === 'around'
          ? 'space-around'
          : justify === 'end'
          ? 'flex-end'
          : 'flex-start',
      gap:
        spacing === 'extraTight'
          ? '0.125rem'
          : spacing === 'tight'
          ? '0.375rem'
          : spacing === 'loose'
          ? '1rem'
          : spacing === 'extraLoose'
          ? '1.25rem'
          : '0.75rem'
    };

    console.log({ defaultStyles });
    const stackEl = screen.getByTestId('test-stack');
    expect(stackEl).toHaveStyle(defaultStyles);
  });
});
