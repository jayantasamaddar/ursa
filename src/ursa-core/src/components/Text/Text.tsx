import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Invisible } from '../Invisible';

type Element =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'span'
  | 'p'
  | 'legend'
  | 'inherit';

type Variant =
  | 'headingXS'
  | 'headingS'
  | 'headingM'
  | 'headingL'
  | 'headingXL'
  | 'heading2XL'
  | 'heading3XL'
  | 'heading4XL'
  | 'bodyS'
  | 'bodyM'
  | 'bodyL';

type Color = 'normal' | 'success' | 'warning' | 'error' | 'subdued';
type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';
type TextTransform = 'lowercase' | 'uppercase' | 'capitalize';
type TextAlign = 'left' | 'right' | 'center' | 'justify';

export interface TextProps {
  /** `id` attribute of the Text Component */
  id?: string;
  /** `className` attribute of the Text Component */
  className?: string;
  /** The display content of the Text Component */
  children?: ReactNode;
  /** Element type */
  as?: Element;
  /** Color of the Text Component */
  color?: Color;
  /**
   * `fontWeight` property of the Text Component
   *
   * `regular` | `medium` | `semibold` | `bold`
   */
  fontWeight?: FontWeight;
  /** Style to apply to the Text Component */
  variant?: Variant;
  /** Transform text to either: `lowercase`, `uppercase` or `capitalize` */
  transform?: TextTransform;
  /** Whether or not Text is underlined */
  underline?: boolean;
  /** Whether or not Text is strikethrough */
  strikethrough?: boolean;
  /** Whether or not Text is truncated */
  truncate?: boolean;
  /** Whether or not Text is hidden */
  hidden?: boolean;
  /** Horizontal Text Alignment */
  align?: TextAlign;
  /** Whether or not to wrap Text */
  wrap?: boolean;
}

const UrsaText = ({ id, className, children, as, hidden }: TextProps) => {
  const Element = !as || as === 'inherit' ? 'p' : as;

  const textMarkup = (
    <Element id={id} className={`Ursa-Text ${className || ''}`}>
      {children}
    </Element>
  );

  return hidden ? <Invisible>{textMarkup}</Invisible> : textMarkup;
};

export const Text = styled(UrsaText)(
  ({
    theme: { color, fontSize },
    as: inputAs,
    variant: inputVariant,
    color: inputColor = 'normal',
    fontWeight,
    transform,
    strikethrough,
    underline,
    truncate,
    align,
    wrap
  }) => {
    const textDecorationValues: string[] = [];
    if (underline) textDecorationValues.push('underline');
    if (strikethrough) textDecorationValues.push('line-through');

    const defaultVariant: { [E in Element]: Variant } = {
      h1: 'heading4XL',
      h2: 'heading3XL',
      h3: 'heading2XL',
      h4: 'headingXL',
      h5: 'headingL',
      h6: 'headingM',
      span: 'bodyM',
      p: 'bodyM',
      legend: 'bodyM',
      inherit: 'bodyM'
    };

    const defaultVariantFontWeight: { [V in Variant]: FontWeight } = {
      headingXS: 'semibold',
      headingS: 'semibold',
      headingM: 'semibold',
      headingL: 'semibold',
      headingXL: 'semibold',
      heading2XL: 'semibold',
      heading3XL: 'bold',
      heading4XL: 'bold',
      bodyS: 'regular',
      bodyM: 'regular',
      bodyL: 'regular'
    };

    const colors: { [C in Color]: string } = {
      normal: color['--ursa-text-primary'],
      success: color['--ursa-text-success'],
      warning: color['--ursa-text-warning'],
      error: color['--ursa-text-error'],
      subdued: color['--ursa-text-subdued']
    };

    const sizes: { [V in Variant]: string } = {
      heading4XL: fontSize['--ursa-font-size-13'],
      heading3XL: fontSize['--ursa-font-size-12'],
      heading2XL: fontSize['--ursa-font-size-11'],
      headingXL: fontSize['--ursa-font-size-9'],
      headingL: fontSize['--ursa-font-size-8'],
      headingM: fontSize['--ursa-font-size-7'],
      headingS: fontSize['--ursa-font-size-6'],
      headingXS: fontSize['--ursa-font-size-5'],
      bodyL: fontSize['--ursa-font-size-6'],
      bodyM: fontSize['--ursa-font-size-5'],
      bodyS: fontSize['--ursa-font-size-4']
    };

    const as = !inputAs || inputAs === 'inherit' ? 'p' : inputAs;
    const variant = !inputVariant ? defaultVariant[as] : inputVariant;

    return {
      color: colors[inputColor],
      fontWeight: !fontWeight ? defaultVariantFontWeight[variant] : fontWeight,
      fontSize: sizes[variant],
      textAlign: align,
      textDecoration: textDecorationValues.join(' ') || undefined,
      textTransform: transform || 'none',
      maxWidth: truncate ? '100%' : undefined,
      overflow: truncate ? 'hidden' : 'visible',
      whiteSpace: truncate ? 'nowrap' : 'normal',
      textOverflow: truncate ? 'ellipsis' : 'clip',
      overflowWrap: wrap ? 'break-word' : 'normal'
    };
  }
);
