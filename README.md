# Dependencies List

## DevDependencies

**Configuration**

1. **[`yargs`](https://www.npmjs.com/package/yargs)** - Yargs helps you build
   interactive command line tools, by parsing arguments and generating an
   elegant user interface.

**Testing**

1. **[@testing-library/react](https://www.npmjs.com/package/@testing-library/react)** -
   Simple and complete React DOM testing utilities that encourage good testing
   practices.
2. **[jest](https://www.npmjs.com/package/jest)** - Test Runner and Testing
   Library.
3. **[@types/jest]** - Typings for Jest.
4. **[jest-environment-jsdom](https://www.npmjs.com/package/jest-environment-jsdom)** -
   Add `jsdom` environment for Jest.
5. **[@emotion/jest](https://www.npmjs.com/package/@emotion/jest)** - Test React
   components easily with emotion with the `@emotion/jest/serializer` snapshot
   serializer.
6. **[@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)** -
   Custom jest matchers to test the state of the DOM.
7. **[@storybook/testing-react](https://www.npmjs.com/package/@storybook/testing-react)** -
   Reuse Storybook stories in React tests.
8. **[@storybook/testing-library](https://www.npmjs.com/package/@testing-library/jest-dom)** -
   Storybook integration for Testing Library, instrumented for use with the
   Interactions addon.
9. **[@storybook/addon-jest](https://www.npmjs.com/package/@testing-library/addon-jest)** -
   Storybook addon for inspecting Jest unit test results.

---

React Testing without Storybook

```es6
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from '../ThemeProvider';
import { Button } from './Button';

describe('components/Button', () => {
  describe('Renders Button', () => {
    it('Renders Default Button', () => {
      render(
        <ThemeProvider>
          <Button>Button</Button>
        </ThemeProvider>
      );
      const buttonEl = screen.getByRole('button');
      expect(buttonEl).toBeInTheDocument();
    });
    it('Renders Primary Button', () => {
      render(
        <ThemeProvider>
          <Button primary>Button</Button>
        </ThemeProvider>
      );
      const buttonEl = screen.getByRole('button');
      expect(buttonEl).toBeInTheDocument();
    });
  });
});
```
