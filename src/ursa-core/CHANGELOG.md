# @zenius-one/ursa

## 0.5.0

### Minor Changes

- [#13](https://github.com/jayantasamaddar/ursa/pull/13)
  [`e1cb6f1`](https://github.com/jayantasamaddar/ursa/commit/e1cb6f14993cdd5c6a20409c36f6f619b05d37d3)
  Thanks [@jayantasamaddar](https://github.com/jayantasamaddar)! - - **FIXED**:

  - **`Tag`** component's close button element is now a HTML Button Element.
  - **`Accordion`** component is broken down into `AccordionHeader` and
    `AccordionPanel` components internally (similar structure to Tabs), which
    are composed in the main **`Accordion`** component. The visible Accordion
    Headers are now HTML Buttons inside `h4` tags.
  - Fixed an issue with Test runner not able to recognize storybook story types
    for the **`Accordion`**, **`Stack`**, **`Tabs`** and **`Tags`** components.
  - Fixed minor issues with types for **`Tabs`** and `BaseButton`.
  - For Contributors: Changed prop `content` to `children` for `TabPanel` (Tabs
    component internals not exposed outside).
  - Styling issue with Segmented Button Groups having Buttons with the `url`
    prop.
  - Added missing `tabIndex` to `Button` component.
  - Removed `React.FC` as type from components.
  - Added `**/*.mock.tsx` to excludes in `tsconfig.json`.

  - **ADDED**:

    - **Components:**

      - **`Button`**: `disclosure` and `connectedDisclosure` prop added to the
        Button component. Allows buttons to act like **`Popover`** triggers
        efficiently.
      - **`Breadcrumbs`**: Breadcrumbs used in the `Page` component.
      - **`ActionList`**: A collection of Actions triggered by a click or
        keypress that can be used as a Popover.
      - **`ResourceItem`**: An item that is part of a larger list of Resources,
        such as Products, Contacts or Orders. Provides contextual information
        and links to the specific Resource Item page.
      - **`ResourceList`**: A collection consisting of multiple
        **`ResourceItem`** of the same type, e.g. Contacts, Products or Orders.
      - **`Popover`**: An element that takes in a trigger component which can be
        triggered to show and hide a collection of actions, list items,
        resources, etc.
      - **`Text`**: Single component that covers all Typography needs from
        headings to paragraphs and their styling.
      - **`Tooltip`**: Tooltip that shows on hover over another component.
      - **`Pagination`**: A Pagination component has been built separately. This
        replaces the **`DataGrid`** component's pagination. Also used by the
        `Page` component's `PageHeader` sub-component internally.

    - **Utility Functions & Hooks:**

      - **`useOffsetPosition`** - React hook that takes in a `htmlRef`,
        `offsetX` (optional) and `offsetY` (optional) arguments and returns the
        `htmlRef`, `top` and `left` offsets that can then be re-used to set a
        absolute positioned component accurately. For e.g. `Portal` elements
        like a `Popover`, `Tooltip` or `Toast`.
      - **`useAnimation`** - React hook that returns a collection of Animation
        presets that can be used. Currently supports: `fadeIn`, `fillX`, `fillY`
      - **`DOM-utils`** - A collection of utility functions that help get DOM
        information to better shape user experience.

    - **Theme:**

      - Colors: **`--ursa-action-pressed`**, **`--ursa-text-success`**,
        **`--ursa-text-warning`**, **`--ursa-text-error`**,
        **`--ursa-text-subdued`**, **`'--ursa-neutral'`**.
      - Fonts: **`--ursa-font-size-14`**.

    - **Tests**:

      - Components Tested: **`Accordion`**, **`Tabs`**, **`Tag`**, **`Text`**,
        **`Tooltip`**

    - **Config**:

      - Prevented Storybook from being web crawled: Included a `noindex` meta
        tag, to the `manager-head.html` file in `config/.storybook`.
      - Added Storybook publish to Github pages.

  - **UPDATED**:

    - **Components**:

      - Added Keyboard Accessibility for the **`Tabs`** component in accordance
        to **[WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/)**.
      - **`Page`**: The **`Page`** component which simply had a placeholder has
        now been built into a reusable, extremely versatile component to
        standardize Pages of apps built with Ursa.
      - **`Card`**: The Card component has been redone. The old card Component
        is now renamed as the new **`ResourceItem`** component.
      - Started moving CSS styles in `@emotion/styled` components to
        [Object Styles](https://emotion.sh/docs/object-styles) for intellisense
        and reusability.
      - **`DataGrid`**: The old `ActionButtons` sub-component has been redone as
        `ActionBar` and takes in the controller in addition to the props that
        ActionButtons used to take.

    - **Tests**:
      - `Button`, `ButtonGroup`, `

  - **NEW PROJECT**:

    - **`ursa-emotional`** is a new animation library project that has been
      started. The aim is to create a convenient animation library using
      Emotion.js for re-use.

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
