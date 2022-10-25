import { useState, useEffect } from 'react';
import { ColorScheme } from '../../../types/theme';
import { getColorScheme } from '../../../utilities';

export const useColorScheme = () => {
  const defaultScheme = getColorScheme();
  const [colorScheme, setColorScheme] = useState<ColorScheme>(defaultScheme);

  useEffect(() => {
    if (process.env.NODE_ENV === 'test' && colorScheme) return;
    if (window) {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      /** Run the first time */
      if (!colorScheme) {
        return setColorScheme(media.matches ? 'dark' : 'light');
      }
      const themeSetter = () => {
        if (media.matches) {
          setColorScheme('dark');
        } else setColorScheme('light');
      };
      media.addEventListener('change', themeSetter);
      return () => media.removeEventListener('change', themeSetter);
    }
    return;
  }, [colorScheme]);

  return colorScheme;
};
