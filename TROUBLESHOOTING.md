# Known Issues

- **[`fireEvent.blur(HTMLInputElement)` not working as expected: Selection on focus is not being deselected on blur](https://github.com/testing-library/dom-testing-library/issues/1178)**
- **[`checked` attribute for radio buttons and checkboxes do not update correctly in the DOM](https://github.com/facebook/react/issues/24439)** -
  An HTML Radio or Checkbox element that may have the `element.checked === true`
  attribute, does not see the correct visual implementation in the DOM. The
  radio button and checkbox function as intended, functionally have the value
  updated, but the checked attribute doesn't show up on the DOM node. Apparently
  this is a known issue for now.
- **`ActionBar`** component is not expanding the additional buttons. Needs
  debugging.
- **`Pagination`** component with Label has an alignment issue. Will be fixed in
  next release.

---

# Partially Solved / Work-in-Progress Issues

- [Storybook Story Types **`unknown`**, not read by Jest](https://github.com/storybookjs/testing-react/issues/117) -
  Using the following syntax seems to remove the `unknown` error in the test
  files, but it's a verbose, non-elegant solution. The types should infer
  correctly.

  ```es6
  const BasicComponent: ComponentStoryFn<typeof Component> = Template.bind({});
  ```

- [**Emotion.js** - Problems with **`:first-of-type`**, **`:nth-of-type`**, **`:last-of-type`** and a hacky temporary solution.](https://github.com/emotion-js/emotion/issues/2922)

---

# Solved Issues

- [**`@storybook/testing-react`** - Cannot use import statement outside a module](https://github.com/storybookjs/testing-react/issues/15#issuecomment-1276691456) -
  Solved by allowing `@babel/preset-env` and `@babel/preset-react` to transpile.
  The problem was that `.babelrc` was not being used by Jest to transpile, the
  config file had to be changed to `babel.config.js`.
- Icons from **`@zenius-one/icons`** are not read by Jest. Mock needed. Deeply
  nested icons, for example the `<Link external>Link</Link>` component might
  have a problem. (`Error: React__namespace.createElement is not a function`). -
  This is resolved by creating a valid Mock - e.g.
  [SVGMock](/src/ursa-core/config/__mocks__/SvgMock.tsx). It then needs to be
  mapped accurately with **`moduleNameMapper`**.
- [**`moduleNameMapper`** seems to map React SVG Icon files correctly, but not replace the modules which now show up as `undefined`](https://github.com/facebook/jest/issues/13445) -
  The error was due to incorrect name of exports. Visit the Jest issues link to
  view the detailed solution.
- **Jest Snapshot tests fail when using Dynamic IDs** - Fixed by writing a
  **[Custom Serializer](/src/ursa-core/config/dynamic-id-serializer.js)** that
  provides deterministic IDs that Jest can use for Snapshot testing.
