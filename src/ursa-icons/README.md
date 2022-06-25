# @zenius-one/ursa-icons

[![npm version](https://img.shields.io/npm/v/@zenius-one/ursa-icons.svg?style=flat)](https://www.npmjs.com/package/@zenius-one/ursa-icons)

This package exports a set of icons for use in Zenius application built with the
Ursa UI Library that can be imported directly into the application.

---

# Setup

Although this package can be installed standalone, we recommend installing the
[Ursa](https://www.npmjs.com/package/@zenius-one/ursa) Library and use the
`Icon` Component to consume the imported icons.

---

# Installation and Usage

1. Using the Ursa Library. (Installation Instructions)

In `Component.jsx`

```
import { MinusMinor } from '@zenius-one/ursa-icons';
import { Icon } from '@zenius-one/ursa';

const Component = () => {
    return (
        <Icon source={MinusMinor} />
    );
}
```

2. Using Ursa Icons as a standalone dependency

Using **`npm`**

```
npm i @zenius-one/ursa-icons
```

Using **`yarn`**

```
yarn add @zenius-one/ursa-icons
```

---
