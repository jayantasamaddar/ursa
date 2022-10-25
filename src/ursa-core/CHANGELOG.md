# @zenius-one/ursa

## 0.4.0

### Minor Changes

- [#7](https://github.com/jayantasamaddar/ursa/pull/7)
  [`d4e444a`](https://github.com/jayantasamaddar/ursa/commit/d4e444a23663c1cf873ea3853ad28d36380da23e)
  Thanks [@jayantasamaddar](https://github.com/jayantasamaddar)! - - Added
  support for Custom Themes. Read the
  **[Documentation](../src/ursa-core/README.md)** for details.
  - Auto-detect Color Scheme of the Operating System and change colour scheme of
    the theme accordingly. (Default behaviour is detecting color schemes). Can
    be toggled on and off. Read the
    **[Documentation](../src/ursa-core/README.md)** for more details.
  - Ship the **`useColorScheme()`** hook that adds a listener to detect any
    color scheme changes. This helps conditionally render custom themes based on
    client's preferred colour scheme.
  - Added a `getColorScheme()` function to detect current color scheme on the
    client. For most cases, developers will not need this and should only use
    the new `useColorScheme()` hook which uses the `getColorScheme` internally
    as initialization value.
  - Added `"jsxImportSource": "@emotion/react"` to
    `src/ursa-core/tsconfig.json`.

## 0.3.0

### Minor Changes

- [`8859149`](https://github.com/jayantasamaddar/ursa/commit/8859149483494c0b3f8818f017474be310640bf3)
  Thanks [@jayantasamaddar](https://github.com/jayantasamaddar)! - - Semantic
  Versioning to be officially adopted at the time of launch.

  - **FIXED:**

    - Type definitions in the `ButtonGroup` test that were throwing errors
      during compilation.
    - For **Developers**: Storybook files can now be saved as
      `*.stories.(?:ts|js)x?`.
    - **`Stack`** - Fixed an issue with the alignment.

  - **ADDED:**

    - **Components:**
      - **`Form`** - The HTML Form Element in its unstyled structure.
      - **`FormLayout`** - Composite Component that allows to group Form
        elements using nested **`FormLayout.Group`** components and adds Ursa
        styling.
    - **Tests:** Invisible, Modal, Stack, Radio, Select.
    - **Theme:** Color `--ursa-text-tertiary` added.

  - **UPDATED:**

    - **Components:**
      - **`Radio`** - Added a `helpText` prop that allows the radio button to be
        described in details. Radio button `value` has to be manually added now.
      - **`Modal`** - Improved usability of the `onChange`, `onClose`, `onClick`
        functions to Modal elements.
      - **`Checkbox`** - Improved accessibility. Added padding on the Y-axis.
        Added a `helpText` prop that allows the Checkbox to be described in
        details.
      - **`Select`** - Select now has the same styling as the rest of the form
        elements and new customizations, including `helpText`.
    - **Tests:**
      - Snapshot tests' location and filename.
      - **`Error`** is fully tested.
