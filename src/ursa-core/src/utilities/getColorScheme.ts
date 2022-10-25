import { ColorScheme } from '../types/theme';

export const getColorScheme = (): ColorScheme =>
  process.env.NODE_ENV !== 'production'
    ? 'light'
    : window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
