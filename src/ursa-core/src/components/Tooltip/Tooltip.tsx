import React, {
  useState,
  ReactNode,
  ReactElement,
  useRef,
  useCallback
} from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import {
  generateUniqueID,
  isReactElement,
  useOffsetPosition
} from '../../utilities';
import { useAnimation } from '../../styles';
import { Portal } from '../Portal';

export interface TooltipProps {
  /** The Element which triggers the tooltip */
  children: ReactNode;
  /** The content to display within the tooltip */
  content: ReactNode;
  /** Visually hidden text for screen readers */
  ariaLabel?: string;
  /** Callback when Tooltip is closed */
  onClose?(): void;
}

const StyledTooltip = styled.div(({ theme: { color } }) => {
  const { fadeIn } = useAnimation();
  return {
    position: 'absolute',
    marginTop: '0.25rem',
    padding: '0.625rem',
    backgroundColor: color['--ursa-white'],
    color: color['--ursa-black'],
    boxShadow:
      '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    borderRadius: '0.25rem',
    maxWidth: '30%',
    zIndex: 50,
    backfaceVisibility: 'hidden',
    opacity: 0,
    animation: `${fadeIn} 0.2s ease-in-out 0.1s forwards`,
    MozAnimation: `${fadeIn} 0.2s ease-in-out 0.1s forwards`,
    OAnimation: `${fadeIn} 0.2s ease-in-out 0.1s forwards`
  };
});

export const Tooltip = ({
  children,
  content,
  ariaLabel,
  onClose
}: TooltipProps): ReactElement | null => {
  /*****************************************************************************************/
  /** Declare variables, states and refs */
  /*****************************************************************************************/
  const [isOpen, setIsOpen] = useState(false);
  const isValidElement = isReactElement(children);
  const _id = generateUniqueID('Ursa-Tooltip');
  const elementRef = useRef<HTMLSpanElement>(null);

  const { top, left } = useOffsetPosition(elementRef);

  /*****************************************************************************************/
  /** Handle events */
  /*****************************************************************************************/
  const handleMouseOver = useCallback(() => setIsOpen(true), []);

  const handleMouseLeave = useCallback(() => {
    setIsOpen(false);
    onClose && onClose();
  }, []);

  /*****************************************************************************************/
  /** Render Tooltip */
  /*****************************************************************************************/
  return (
    <div
      className="Ursa-ElementWithTooltip"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <span
        ref={elementRef}
        className="Ursa-TooltipContent"
        aria-describedby={_id}
      >
        {children}
      </span>

      {isOpen && (
        <Portal idPrefix="Ursa-TooltipContainer">
          <StyledTooltip
            className="Ursa-Tooltip"
            role="tooltip"
            style={{
              left,
              top:
                top + (elementRef.current as HTMLSpanElement).offsetHeight + 12
            }}
          >
            <span id={_id} className="Ursa-TooltipText" aria-label={ariaLabel}>
              {content}
            </span>
          </StyledTooltip>
        </Portal>
      )}
    </div>
  );
};
