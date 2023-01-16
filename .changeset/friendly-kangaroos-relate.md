---
'@zenius-one/ursa': minor
---

- **FIXED**:

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
    - **`ActionList`**: A collection of Actions triggered by a click or keypress
      that can be used as a Popover.
    - **`ResourceItem`**: An item that is part of a larger list of Resources,
      such as Products, Contacts or Orders. Provides contextual information and
      links to the specific Resource Item page.
    - **`ResourceList`**: A collection consisting of multiple **`ResourceItem`**
      of the same type, e.g. Contacts, Products or Orders.
    - **`Popover`**: An element that takes in a trigger component which can be
      triggered to show and hide a collection of actions, list items, resources,
      etc.
    - **`Text`**: Single component that covers all Typography needs from
      headings to paragraphs and their styling.
    - **`Tooltip`**: Tooltip that shows on hover over another component.
    - **`Pagination`**: A Pagination component has been built separately. This
      replaces the **`DataGrid`** component's pagination. Also used by the
      `Page` component's `PageHeader` sub-component internally.

  - **Utility Functions & Hooks:**

    - **`useOffsetPosition`** - React hook that takes in a `htmlRef`, `offsetX`
      (optional) and `offsetY` (optional) arguments and returns the `htmlRef`,
      `top` and `left` offsets that can then be re-used to set a absolute
      positioned component accurately. For e.g. `Portal` elements like a
      `Popover`, `Tooltip` or `Toast`.
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

    - Prevented Storybook from being web crawled: Included a `noindex` meta tag,
      to the `manager-head.html` file in `config/.storybook`.
    - Added Storybook publish to Github pages.

- **UPDATED**:

  - **Components**:

    - Added Keyboard Accessibility for the **`Tabs`** component in accordance to
      **[WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/)**.
    - **`Page`**: The **`Page`** component which simply had a placeholder has
      now been built into a reusable, extremely versatile component to
      standardize Pages of apps built with Ursa.
    - **`Card`**: The Card component has been redone. The old card Component is
      now renamed as the new **`ResourceItem`** component.
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
