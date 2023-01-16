import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Tag.story';

const { BasicTag, ClickableTag, RemovableTag } = composeStories(stories);

describe('components/Tag', () => {
  describe('<BasicTag />', () => {
    it('Rendered in the DOM', () => {
      render(<BasicTag />);
      const tagEl = screen.getByTestId('test-tag');
      expect(tagEl).toBeInTheDocument();
      expect(tagEl).toHaveTextContent(BasicTag.args?.name as string);
    });
  });

  describe('<ClickableTag />', () => {
    it('Rendered in the DOM', () => {
      const clickFn = jest.fn();
      render(<ClickableTag onClick={clickFn} />);
      const tagEl = screen.getByTestId('test-tag');
      expect(tagEl).toBeInTheDocument();
      expect(tagEl).toHaveTextContent(ClickableTag.args?.name as string);
      fireEvent.click(tagEl);
      expect(clickFn).toHaveBeenCalledTimes(1);
    });
  });

  describe('<RemoveableTag />', () => {
    it('Rendered in the DOM', () => {
      render(<RemovableTag />);
      const tagsEl = screen.queryAllByTestId('test-tag');
      tagsEl.forEach((tag) => {
        const text = tag.textContent;
        const removeBtn = tag.getElementsByTagName('button');
        fireEvent.click(removeBtn[0]);
        const tagsAfterRemoval = screen.queryAllByTestId('test-tag');
        expect(tagsAfterRemoval.includes(tag)).not.toBe(true);
      });
    });
  });
});
