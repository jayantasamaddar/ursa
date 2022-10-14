# Known Issues

- [**Emotion.js** - Problems with **`:first-of-type`**, **`:nth-of-type`**, **`:last-of-type`** and a hacky temporary solution.](https://github.com/emotion-js/emotion/issues/2922)
- [Types **`unknown`**, not read by Jest](https://github.com/storybookjs/testing-react/issues/117)
- Icons from **`@zenius-one/icons`** are not read by Jest. Mock needed. Deeply
  nested icons, for example the `<Link external>Link</Link>` component might
  have a problem. (`Error: React__namespace.createElement is not a function`).
  This is only a Testing issue, due to the way Jest behaves. The Icons render
  correctly on the browser and work as expected.

---

# Solved Issues

- [**`@storybook/testing-react`** - Cannot use import statement outside a module](https://github.com/storybookjs/testing-react/issues/15#issuecomment-1276691456)
