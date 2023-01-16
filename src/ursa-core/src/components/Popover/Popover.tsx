import styled from '@emotion/styled';
import React, {
  cloneElement,
  ReactElement,
  ReactNode,
  Children,
  useEffect,
  useCallback,
  useRef,
  KeyboardEvent,
  FocusEvent
} from 'react';
import {
  isElementInViewport,
  getFirstFocusableElement,
  getLastFocusableElement,
  getLastLastChild,
  useOffsetPosition
} from '../../utilities';
import { Portal } from '../Portal';
import { PopoverSection } from './components';

type PopoverAutoFocusTarget = 'none' | 'first' | 'last';

export interface PopoverProps {
  /** The component that triggers the Popover */
  trigger?: ReactElement;
  /** The inner contents of the Popover element */
  children?: ReactNode;
  /** Whether Popover is open */
  active?: boolean;
  /** The item in focus when Popover is opened */
  autofocusTarget?: PopoverAutoFocusTarget;
  /** Callback to run when Popover is closed */
  onClose?(): void;
}

const PopoverContent = styled.div(({ theme: { color } }) => ({
  position: 'absolute',
  backgroundColor: color['--ursa-white'],
  color: color['--ursa-black'],
  marginTop: '0.25rem',
  maxWidth: '20%',
  borderRadius: '0.625rem',
  zIndex: 100,
  backfaceVisibility: 'hidden',
  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 7%), 0  2px 4px -2px rgb(0 0 0 / 7%)'
}));

export const Popover = ({
  trigger,
  children,
  active = false,
  autofocusTarget = 'none',
  onClose
}: PopoverProps): ReactElement => {
  /*****************************************************************************************/
  /** Declare variables, states, refs */
  /*****************************************************************************************/
  const triggerRef = useRef<HTMLElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const { top, left } = useOffsetPosition(triggerRef);

  /*****************************************************************************************/
  /** Event handlers */
  /*****************************************************************************************/
  /** Popover Close: Clicked Outside */
  const clickHandler = useCallback(
    (e: Event) => {
      if (triggerRef.current?.contains(e.target as HTMLElement)) return;
      active && onClose?.();
    },
    [onClose, active]
  );

  /** Popover Close: Scrolled out of view  */
  const scrollHandler = useCallback(
    (e: Event) => {
      if (
        triggerRef.current &&
        active &&
        !isElementInViewport(triggerRef.current)
      ) {
        onClose?.();
      }
    },
    [active, onClose]
  );

  useEffect(() => {
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [clickHandler]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => document.removeEventListener('scroll', scrollHandler);
  }, [scrollHandler]);

  /** Handle Popover `autofocusTarget` */
  useEffect(() => {
    if (active && popoverRef.current) {
      switch (autofocusTarget) {
        case 'first':
          return getFirstFocusableElement(popoverRef.current)?.focus();
        case 'last':
          return getLastFocusableElement(popoverRef.current)?.focus();
        default:
          break;
      }
    }
  }, [active, autofocusTarget]);

  /** Popover Close: Escape Key Pressed */
  const closeOnEscape = useCallback(
    (e: KeyboardEvent) => {
      e.key === 'Escape' && active ? onClose?.() : null;
    },
    [active, onClose]
  );

  /** Popover Close: Popover Focusout - The blur is interfering, probably not the way to go */
  // const handlePopoverBlur = useCallback(
  //   (e: FocusEvent<HTMLDivElement>) => {
  //     const targetNode = getLastLastChild(popoverRef.current as HTMLElement);
  //     if (e.target.contains(targetNode)) {
  //       onClose?.();
  //       /** Adding a small delay is necessary for the focus to work */
  //       setTimeout(() => triggerRef.current && triggerRef.current.focus(), 1);
  //     }
  //   },
  //   [onClose]
  // );
  /*****************************************************************************************/
  /** Content Markup */
  /*****************************************************************************************/
  const triggerMarkup = trigger
    ? cloneElement(Children.only(trigger), { ref: triggerRef })
    : undefined;

  const popoverMarkup = active ? (
    <Portal idPrefix="Ursa-Popover">
      <PopoverContent
        className="Ursa-PopoverContent"
        ref={popoverRef}
        // onBlur={handlePopoverBlur}
        style={{
          top: top + (triggerRef?.current as HTMLElement).offsetHeight || 0,
          left
        }}
      >
        {children}
      </PopoverContent>
    </Portal>
  ) : undefined;
  /*****************************************************************************************/
  /** Render Popover */
  /*****************************************************************************************/
  return (
    <div className="Ursa-PopoverWrapper" onKeyUp={closeOnEscape}>
      {triggerMarkup}
      {popoverMarkup}
    </div>
  );
};
