import React, {
  FC,
  ReactElement,
  MouseEvent,
  Fragment,
  useState,
  useEffect,
  useRef
} from 'react';

import styled from '@emotion/styled';
import { ActionButtons as ActionButtonsProps } from '../../../types';
import { Icon } from '../../Icon';
import { Button } from '../../Button';
import { CaretDownMinor } from '@zenius-one/ursa-icons';

const UrsaActionButtons: FC<ActionButtonsProps> = ({
  actions,
  truncateAfter = 3,
  truncateLabel = 'More Actions'
}): ReactElement => {
  /*************************************************************************/
  // Initialize State
  /*************************************************************************/
  const [toggle, setToggle] = useState(false);
  const actionsRef = useRef<HTMLDivElement>(null);

  /*************************************************************************/
  // Handle Events
  /*************************************************************************/
  const toggleMore = () => setToggle((prev) => !prev);

  useEffect(() => {
    const handler = (event: MouseEvent<HTMLElement>) => {
      if (!actionsRef.current?.contains(event.target as HTMLElement))
        setToggle(false);
      else return;
    };
    document.addEventListener('click', (e: Event) => handler);
    return () => document.removeEventListener('click', (e: Event) => handler);
  }, [toggle]);

  /*************************************************************************/
  // Return JSX
  /*************************************************************************/

  return (
    <Fragment>
      {actions?.slice(0, truncateAfter).map((button, index) => {
        return (
          <button
            className="Ursa-ActionButton"
            onClick={button.onClick}
            key={
              button.label
                .replace(/[^a-zA-Z ]/g, '')
                .replace(/\s+/g, '-')
                .toLowerCase() || index
            }
          >
            {button.label}
          </button>
        );
      })}

      {actions?.length > (truncateAfter ?? 10) && (
        <div className="Ursa-MoreActions" ref={actionsRef}>
          <button className="Ursa-ActionButton" onClick={toggleMore}>
            <span className="Ursa-ActionButtonLabel">{truncateLabel}</span>
            {/* <span className="arrow">
              <i className="fas fa-caret-down"></i>
            </span> */}
            <Icon source={CaretDownMinor} />
          </button>
          <ul
            className={`data-table-actions absolute w-max h-full${
              !toggle && ' hidden'
            }`}
          >
            {actions
              .slice(truncateAfter)
              .map(({ label, name, onClick }, index) => {
                return (
                  <li
                    className="text-base align-middle"
                    key={
                      name ||
                      label
                        .replace(/[^a-zA-Z ]/g, '')
                        .replace(/\s+/g, '-')
                        .toLowerCase() ||
                      index
                    }
                  >
                    <button
                      className="action-button p-20 border w-[300px] text-left"
                      onClick={onClick}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export const ActionButtons = styled(UrsaActionButtons)(
  ({ theme: { color, border, fontSize } }) => `
    .Ursa-ActionButton {
      padding: 10px;
    }

    .Ursa-MoreActions {
      position: relative;
      flex-direction: column;

      & > .Ursa-ActionButton {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-top-right-radius: 4px;
        width: 100%;
        height: 100%;
      }
    }

    .Ursa-ActionButtonLabel {
      font-size: ${fontSize['--ursa-font-size-3']};

    }
  `
);
