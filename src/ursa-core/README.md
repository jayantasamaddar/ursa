# Ursa Core

Ursa components library.

---

## Installation

```s
# With yarn
yarn add @zenius-one/ursa

# With npm
npm install @zenius-one/ursa
```

---

## License

See LICENSE.md

# Upcoming Releases

### 0.3.0

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

---

# Releasing and Branching Convention

1. The Ursa team will list the agenda for the next release.
2. We will be working on the release on a branch with the name in the format:
   `[workspace]-[version]`. For e.g. if we are working on `ursa-core` and
   version `0.3.1` the branch name should be `ursa-core-0.3.1`.
3. We will be completing the tasks on each item on the release agenda as its own
   commit. If the task is complicated, we may break it down into smaller
   commits. For example, the commit subjects for a task on the agenda called
   **`Add X Component`** could look like:

   - Added `X` Component - Visual Tested on Storybook
   - Added `X` Component - Unit Tested, Integration Tested

4. Only after all tasks of a Release are completed, do we release the version.
   After the final commit is done to the branch, a pull request maybe raised
   with the `main` branch and accepted by a moderator. Once the `main` branch is
   updated the package is automatically published as a release.
