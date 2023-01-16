import '@emotion/react';
import { Color, Font, FontSize, Border, Animation } from './types/theme';

declare module '@emotion/react' {
  export interface Theme {
    color: Color;
    font: Font;
    fontSize: FontSize;
    border: Border;
    animation: Animation;
  }
}
