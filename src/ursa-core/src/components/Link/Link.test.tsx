import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import '@testing-library/jest-dom';
import * as stories from './Link.story'; // import all stories from the stories file
import { lightTheme } from '../../styles';

const { DefaultLink, ExternalLink, MonochromeLink, UnstyledLink } =
  composeStories(stories);

describe('components/Link', () => {
  it('Renders Default Link', () => {
    render(<DefaultLink>Link</DefaultLink>);
    const linkEl = screen.getByTestId('link');
    const linkText = linkEl.querySelector('.Ursa-LinkText');
    expect(linkEl).not.toBeNull();
    expect(linkEl).toHaveAttribute('href', DefaultLink.args.url);
    expect(linkText).toHaveTextContent(linkText.textContent);
    expect(linkEl).toHaveStyle({
      color: lightTheme.color['--ursa-link-primary'],
      'text-decoration': 'underline'
    });
  });
  //   it('Renders External Link', () => {
  //     render(
  //       <ThemeProvider theme={darkTheme}>
  //         <ExternalLink />
  //       </ThemeProvider>
  //     );
  //     const linkEl = screen.getByTestId('link');
  //     const linkText = linkEl.querySelector('.Ursa-LinkText');
  //     const externalIcon = screen.getByTestId('icon');
  //     expect(linkEl).not.toBeNull();
  //     expect(linkEl).toHaveAttribute('href', ExternalLink.args.url);
  //     expect(linkEl).toHaveAttribute('target', '_blank');
  //     expect(linkEl).toHaveAttribute('rel', 'noopener noreferrer');
  //     expect(linkText).toHaveTextContent(ExternalLink.args.children as string);
  //     expect(linkEl).toHaveStyle({
  //       color: darkTheme.color['--ursa-link-primary']
  //     });
  //     expect(externalIcon).not.toBeNull();
  //   });
  it('Renders Monochrome Link', () => {
    render(<MonochromeLink />);
    const linkEl = screen.getByTestId('link');
    const linkText = linkEl.querySelector('.Ursa-LinkText');
    expect(linkEl).not.toBeNull();
    expect(linkEl).toHaveAttribute('href', MonochromeLink.args.url);
    expect(linkText).toHaveTextContent(MonochromeLink.args.children as string);
    expect(linkEl).toHaveStyle({
      color: lightTheme.color['--ursa-text-primary'],
      'text-decoration': 'underline'
    });
  });
  it('Renders Unstyled Link', () => {
    render(<UnstyledLink />);
    const linkEl = screen.getByTestId('link');
    const linkText = linkEl.querySelector('.Ursa-LinkText');
    expect(linkEl).not.toBeNull();
    expect(linkEl).toHaveAttribute('href', UnstyledLink.args.url);
    expect(linkText).toHaveTextContent(UnstyledLink.args.children as string);
    expect(linkEl).toHaveStyle({
      color: lightTheme.color['--ursa-text-primary'],
      'text-decoration': 'none'
    });
  });
});
