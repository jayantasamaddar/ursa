# Comparison between various Animation Libraries that work with Emotion

| Library       | Type                    | Customization | Requirements | PnP | Complexity |
| ------------- | ----------------------- | ------------- | ------------ | --- | ---------- |
| Framer Motion | Components and Hooks    | Very High     | React 18     | No  | High       |
| Animate.css   | Presets, CSS Stylesheet | Medium        | Any          | Yes | Low        |
| Animista      | Presets, CSS Generator  | Low           | Any          | Yes | Low        |

---

## Framer Motion

**Description:** An open source production-ready motion library for React. It's
simple yet powerful, allowing you to express complex user interactions with
robust, semantic markup.

**Requirements:** Framer Motion requires React 18 or greater.

### Basic API

The core of the library is
[the motion component](https://www.framer.com/docs/component/). Think of it as a
plain HTML or SVG element, supercharged with animation capabilities.

```jsx
<motion.div
  animate={{
    x: 0,
    backgroundColor: '#000',
    boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    transitionEnd: {
      display: 'none'
    }
  }}
/>
```

---

### Keyframes

Set a value as an array and Motion will animate through each of these values in
turn.

By default, each keyframe will be spaced evenly throughout the animation, but
the exact timing and easing can be configured via the
[`transition`](https://www.framer.com/docs/transition/) property.

```jsx
import { motion } from 'framer-motion';

export const MyComponent = () => (
  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%']
    }}
  />
);
```

---

### Variants

Variants are pre-defined visual states that a component can be in. By giving a
component and its children `variants` with matching names, whole React trees can
be animated by changing a single prop.

By using variants, a parent can easily orchestrate the animations of its
children with special `transition` props like `staggerChildren`.

Variants can also be dynamic functions that return different props based on data
passed to each component's `custom` prop.

```jsx
import { motion } from 'framer-motion';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' }
};

export const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
      <Toggle onClick={() => setIsOpen((isOpen) => !isOpen)} />
      <Items />
    </motion.nav>
  );
};
```
