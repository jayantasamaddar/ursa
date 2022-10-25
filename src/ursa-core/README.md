# Ursa

[![npm version](https://img.shields.io/npm/v/@zenius-one/ursa.svg?label=%40zenius%2Fursa&style=flat)](https://www.npmjs.com/package/@zenius-one/ursa)
[![npm downloads](https://img.shields.io/npm/dm/@zenius-one/ursa?style=flat)](https://www.npmjs.com/package/@zenius-one/ursa)

Ursa is a themeable, but opinionated component library designed for the Zenius
One ecosystem to create the best experience for users who use Zenius One
products.

---

## Installation

```s
# With yarn
yarn add @zenius-one/ursa

# With npm
npm install @zenius-one/ursa
```

---

## Usage

Wrap your main **`App`** component with the **`ThemeProvider`** component.

- In `Next.js` this is usually at `pages/_app.tsx`.
- In `Create-React-App` this is usually at `src/index.ts`.
- Equivalent for other React frameworks.

**Example:** Usage in `Next.js`. This is the default behaviour where it switches
from `light` to `dark` themes as the preferred
**[`color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)**
changes.

```tsx
import { ThemeProvider } from '@zenius-one/ursa';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
```

---

## Themes

**`ThemeProvider`** ships with the Ursa **lightTheme** and the **darkTheme**.
These are the only two officially supported themes at the moment. You can change
themes programmatically or not, by providing the `ThemeProvider` component the
`theme` prop.

**Example:** Overriding theme in `Next.js`. This will apply `darkTheme` for all
times.

```tsx
import { ThemeProvider } from '@zenius-one/ursa';
import { darkTheme } from '@zenius-one/ursa/dist/esm/styles/darkTheme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
```

By default, Ursa will auto detect the preferred color scheme of the Operating
System and switch to a **`light`** or **`dark`** color scheme accordingly.

---

# Custom Themes

Ursa can allow the developers on the Zenius platform using Ursa, to set their
own custom themes for both `light` and `dark` modes (or any other theme switch
logic they would like to use).

As mentioned earlier, Ursa will auto detect the preferrer color scheme of the
Operating System and do the switches. However, you can turn this behaviour off
by adding the `{ detect: false }` option to `themeOptions` and providing your
own theme. Ursa ships with a `useColorScheme` React hook that detects the
preferred color scheme.

**Example:** Using your custom themes that switch based on preferred color
scheme.

```tsx
import { customLightTheme, customDarkTheme } from '.path/to/themes';
import { useColorScheme } from '@zenius-one/ursa';

function MyApp({ Component, pageProps }: AppProps) {
  const currentScheme = useColorScheme();
  const selectedScheme =
    currentScheme === 'dark' ? customDarkTheme : customLightTheme;

  return (
    <ThemeProvider theme={selectedScheme} themeOptions={{ detect: false }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
```

> **Note:**
>
> - Ursa allows custom themes. However, this means using the theme variables
>   already defined by the Ursa style system. Currently, only custom colors are
>   supported. (Documentation has to be expanded on this)
> - This is a pre-alpha release. Custom themes and the manner of their
>   implementation may be subject to change.

---

## License

See
[LICENSE.md](https://github.com/jayantasamaddar/ursa/blob/main/src/ursa-core/LICENSE.md)

---
