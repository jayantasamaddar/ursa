import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import * as stories from './Avatar.story'; // import all stories from the stories file
import { lightTheme } from '../../styles';

const { SmallAvatar, StandardAvatar, LargeAvatar, Square_with_NoImage_Avatar } =
  composeStories(stories);

const px = (size?: string) =>
  size === 'small' ? '28px' : size === 'large' ? '112px' : '56px';

describe('components/Avatar', () => {
  it('Renders Small Avatar', () => {
    render(<SmallAvatar />);
    const iconEl = screen.getByTestId('avatar');
    expect(iconEl).not.toBeNull(); // Element is Present
    expect(iconEl).toHaveAttribute('src', SmallAvatar.args?.src); // Match src
    expect(iconEl).toHaveAttribute('alt', SmallAvatar.args?.alt); // Match alt text
    expect(iconEl).toHaveStyle({
      width: px(SmallAvatar.args?.size),
      height: px(SmallAvatar.args?.size)
    }); // Match size
  });

  it('Renders Standard Avatar', () => {
    render(<StandardAvatar />);
    const iconEl = screen.getByTestId('avatar');
    expect(iconEl).not.toBeNull(); // Element is Present
    expect(iconEl).toHaveAttribute('src', StandardAvatar.args?.src); // Match src
    expect(iconEl).toHaveAttribute('alt', StandardAvatar.args?.alt); // Match alt text
    expect(iconEl).toHaveStyle({
      width: px(StandardAvatar.args?.size),
      height: px(StandardAvatar.args?.size)
    }); // Match size
  });

  it('Renders Large Avatar', () => {
    render(<LargeAvatar />);
    const iconEl = screen.getByTestId('avatar');
    expect(iconEl).not.toBeNull(); // Element is Present
    expect(iconEl).toHaveAttribute('src', LargeAvatar.args?.src); // Match src
    expect(iconEl).toHaveAttribute('alt', LargeAvatar.args?.alt); // Match alt text
    expect(iconEl).toHaveStyle({
      width: px(LargeAvatar.args?.size),
      height: px(LargeAvatar.args?.size)
    }); // Match size
  });

  it('Renders Square with no Image Avatar', () => {
    const borderRadius =
      Square_with_NoImage_Avatar.args?.variant === 'square'
        ? 0
        : lightTheme.border['--ursa-border-radius-full'];
    render(<Square_with_NoImage_Avatar />);
    const iconEl = screen.getByTestId('avatar-placeholder');
    expect(iconEl).not.toBeNull(); // Element is Present
    expect(iconEl).not.toHaveAttribute('src'); // Does not have src attribute
    expect(iconEl).toHaveAttribute(
      'title',
      Square_with_NoImage_Avatar.args?.alt ||
        Square_with_NoImage_Avatar.args?.children
    ); // Match alt text
    expect(iconEl).toHaveTextContent(
      (Square_with_NoImage_Avatar.args?.children as string)[0]
    ); // Match Children
    expect(iconEl.closest('.Ursa-Avatar')).toHaveStyle({
      'border-radius': borderRadius
    }); // Match square border;
  });
});
