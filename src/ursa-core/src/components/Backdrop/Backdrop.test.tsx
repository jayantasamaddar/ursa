import React from 'react';
import renderer from 'react-test-renderer';
import { matchers } from '@emotion/jest';

// Add the custom matchers provided by '@emotion/jest'
expect.extend(matchers);

import { ThemeProvider } from '../ThemeProvider';
import { Backdrop } from './Backdrop';

describe('components/Backdrop', () => {
  it('Snapshot Test', () => {
    const backdrop = renderer
      .create(
        <ThemeProvider>
          <Backdrop />
        </ThemeProvider>
      )
      .toJSON();
    expect(backdrop).toMatchSnapshot();
  });

  it('Transparent background', () => {
    const backdrop = renderer
      .create(
        <ThemeProvider>
          <Backdrop transparent={true} />
        </ThemeProvider>
      )
      .toJSON();

    expect(backdrop).toHaveStyleRule('background-color', 'transparent');
  });
});
