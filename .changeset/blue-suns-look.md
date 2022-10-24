---
'@zenius-one/ursa': minor
---

- Semantic Versioning to be officially adopted at the time of launch.

- **FIXED:**

  - Type definitions in the `ButtonGroup` test that were throwing errors during
    compilation.
  - For **Developers**: Storybook files can now be saved as
    `*.stories.(?:ts|js)x?`.
  - **`Stack`** - Fixed an issue with the alignment.

- **ADDED:**

  - **Components:**
    - **`Form`** - The HTML Form Element in its unstyled structure.
    - **`FormLayout`** - Composite Component that allows to group Form elements
      using nested **`FormLayout.Group`** components and adds Ursa styling.
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
