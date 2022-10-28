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
  - Removed `React.FC` as type from components.
  - Added `**/*.mock.tsx` to excludes in `tsconfig.json`.

- **ADDED**:

  - Added Tests for **`Accordion`**, **`Tabs`** and **`Tag`** component.
  - Added Keyboard Accessibility for the **`Tabs`** component in accordance to
    **[WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/)**.
