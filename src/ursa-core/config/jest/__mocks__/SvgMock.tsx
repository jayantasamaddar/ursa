import React, { forwardRef, SVGProps } from 'react';

const SvgMock = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  (props, ref) => (
    <svg
      name="SvgMock"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className="Ursa-IconSVG"
      focusable="false"
      aria-hidden="true"
      data-testid="mock-icon"
      ref={ref}
      {...props}
    ></svg>
  )
);

SvgMock.displayName = 'SvgMock';

export const SvgTickMinor = SvgMock;
export const SvgMinusMinor = SvgMock;
export const SvgHomeMajor = SvgMock;
export const SvgAlertMinor = SvgMock;
export const SvgExternalSmallMinor = SvgMock;
export const SvgMobileCancelMajor = SvgMock;
export const SvgCircleCancelMajor = SvgMock;
export const SvgViewMinor = SvgMock;
export const SvgHideMinor = SvgMock;
export const SvgInfoMinor = SvgMock;
export const SvgVMobileCancelMajor = SvgMock;
export const SvgSelectMinor = SvgMock;
export default SvgMock;
