# Emotional

Emotion Animation Library is an animation library that allows the creation of
complex animations with React that use dynamically changing props using Emotion.

# API

There are two main APIs

1. **`Animate`**: Class. Use one or more of the existing animation presets.
2. **`useAnimate()`**: React Hook. Create a custom animation using the existing
   presets or scaffold a completely new animation. This is powerful as this can
   be used to create a Wrapper component

## Class: `Animate`

- name `<string | string[]>` One or more presets

To use one of the presets, simply use:

```jsx
import { Animate } from 'emotionaljs';

const { animation } = new Animation('fadeIn');

const StyledTooltip = styled(Button)({ theme }) => ({
    display: 'relative',

    '& > .Button:hover': {
        animation
    }
})
```

To use multiple presets, chain them as follows:

```jsx
import { Animate } from 'emotionaljs';

const { animation } = new Animation('fadeIn', 'fadeOut');

const StyledTooltip = styled(Button)({ theme }) => ({
    display: 'relative',

    '& > .Button:hover': {
        animation
    }
})
```

---

## Hook: `useAnimate`

```ts
import { useAnimate } from 'emotionaljs';

const animation =  useAnimate({
    enter: 'fadeIn',
    enterFrom: undefined,
    enterTo: undefined,
    enterDuration: 0.2, // in seconds
    enterTimingFunction: 'ease-in-out',
    enterDelay: 0, // in seconds
    enterFillMode: 'forwards',
    enterDirection: 'reverse',
    enterIterationCount: 1,
    exit: 'fadeOut',
    exitFrom: undefined,
    exitTo: undefined,
    exitDuration: 0.2, // in seconds
    exitTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
    exitDelay: 0, // in seconds
    exitFillMode: 'forwards',
    exitDirection: 'reverse',
    exitIterationCount: 1,
 })
```

---

# Design Patterns

- Using with CSS-in-JS
- Chaining animations with pre-built presets
- Complex custom animations
- Using as a Wrapper Component
