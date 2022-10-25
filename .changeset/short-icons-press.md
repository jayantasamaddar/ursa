---
'@zenius-one/ursa': minor
---

- Added support for Custom Themes. Read the
  **[Documentation](../src/ursa-core/README.md)** for details.
- Auto-detect Color Scheme of the Operating System and change colour scheme of
  the theme accordingly. (Default behaviour is detecting color schemes). Can be
  toggled on and off. Read the **[Documentation](../src/ursa-core/README.md)**
  for more details.
- Ship the **`useColorScheme()`** hook that adds a listener to detect any color
  scheme changes. This helps conditionally render custom themes based on
  client's preferred colour scheme.
- Added a `getColorScheme()` function to detect current color scheme on the
  client. For most cases, developers will not need this and should only use the
  new `useColorScheme()` hook which uses the `getColorScheme` internally as
  initialization value.
- Added `"jsxImportSource": "@emotion/react"` to `src/ursa-core/tsconfig.json`.
