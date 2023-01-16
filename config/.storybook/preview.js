import React from 'react';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from '../../src/ursa-core/src/components/ThemeProvider';
import { lightTheme, darkTheme } from '../../src/ursa-core/src/styles';

/** Enable Switching Background Color to a Custom Color */
export const onThemeSwitch = (ctx) => {
  const { theme } = ctx;

  const parameters = {
    backgrounds: {
      default: theme.color['--ursa-bg-primary']
    }
    // Pass backgrounds: null to disable background switching at all
  };
  return {
    parameters
  };
};

export const decorators =
  process.env.NODE_ENV === 'test'
    ? [
        (Story) => (
          <ThemeProvider>
            <Story />
          </ThemeProvider>
        )
      ]
    : [];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  addDecorators: addDecorator(
    withThemes(ThemeProvider, [lightTheme, darkTheme], { onThemeSwitch })
  )
};
