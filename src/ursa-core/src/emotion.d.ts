import '@emotion/react';
import { Color } from './types/theme';

declare module '@emotion/react' {
  export interface Theme {
    color: Color,
    font: {
      "--ursa-font-primary": string;
    },
    fontSize: {
      "--ursa-font-size-1": string;
      "--ursa-font-size-2": string;
      "--ursa-font-size-3": string;
      "--ursa-font-size-4": string;
      "--ursa-font-size-5": string;
      "--ursa-font-size-6": string;
      "--ursa-font-size-7": string;
      "--ursa-font-size-8": string;
      "--ursa-font-size-9": string;
      "--ursa-font-size-10": string;
      "--ursa-font-size-11": string;
      "--ursa-font-size-12": string;
      "--ursa-font-size-13": string;
    },
    border: {
      "--ursa-border-radius-lg": string;
      "--ursa-border-radius-xl": string;
      "--ursa-border-radius-2xl": string;
      "--ursa-border-radius-full": string;
    }
  }
}