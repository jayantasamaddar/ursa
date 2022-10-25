# About

This ursa repository is a multi-purpose monorepo made up of NPM packages, VSCode
Extensions, CLI Tools and websites. Some of these are not yet built but in the
pipeline.

---

# Commands

## Install Dependencies and build all Packages

```s
yarn && yarn build
```

---

## Other Commands

| Command            | Function                                             |
| ------------------ | ---------------------------------------------------- |
| `yarn changeset`   | Add a changeset (intention to publish a change).     |
| `yarn ts-check`    | Check for type errors.                               |
| `yarn test`        | Test a;; the workspaces.                             |
| `yarn build:types` | Build only types.                                    |
| `yarn clean`       | Clean all the cache in all workspaces.               |
| `yarn clean:all`   | Clean all the cache as well as existing build files. |
| `yarn format`      | Format all files with prettier.                      |

---
