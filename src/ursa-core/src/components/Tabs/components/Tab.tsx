import React, { ReactElement, forwardRef } from 'react';
import styled from '@emotion/styled';
import { TabProps } from '../../../types';

const UrsaTab = forwardRef<HTMLButtonElement, TabProps>(
  (
    { id, label, selected, className, index, onClick, onKeyUp },
    ref
  ): ReactElement => {
    return (
      <li
        className={`Ursa-TabHeadItem ${selected ? 'selected' : ''} ${
          className || ''
        }`}
        role="presentation"
      >
        <button
          className="Ursa-Tab"
          id={id}
          ref={ref}
          type="button"
          role="tab"
          aria-label={label}
          aria-selected={selected ? 'true' : 'false'}
          aria-controls={`${id}-panel`}
          onClick={() => onClick(index)}
          onKeyUp={onKeyUp}
          tabIndex={selected ? 0 : -1}
          data-index={index}
        >
          <span className="Ursa-TabTitle">{label}</span>
        </button>
      </li>
    );
  }
);

export const Tab = styled(UrsaTab)(
  ({ theme: { color }, layout, selected }) => `
      display: flex;
      cursor: pointer;
      margin: 0;
      padding: 0;
      color: ${
        selected ? color['--ursa-text-primary'] : color['--ursa-text-secondary']
      };
      
  
      .Ursa-Tab {
          all: unset;
          cursor: pointer;
          margin: 0;
          padding: ${layout === 'vertical' ? '0.75em 1.5em' : '0.6em 1.5em'};
          width: 100%;
          font-weight: bold;
          z-index: 2;
          border-bottom: ${
            layout === 'vertical'
              ? '0'
              : `0.3em solid ${
                  selected ? color['--ursa-btn-primary'] : 'transparent'
                }`
          };
          border-left: ${
            layout === 'vertical'
              ? `0.3em solid ${
                  selected ? color['--ursa-btn-primary'] : 'transparent'
                }`
              : '0'
          };
          transition-property: color, border-bottom, border-left;
          transition-duration: 0.15s;
          transition-timing-function: ease-in-out;
      }
      &:hover {
          color: ${color['--ursa-text-primary']};
  
          .Ursa-Tab {
            padding: ${layout === 'vertical' ? '0.75em 1.5em' : '0.6em 1.5em'};
            border-bottom: ${
              layout === 'vertical'
                ? '0'
                : `0.3em solid ${!selected && color['--ursa-text-secondary']}`
            };
            border-left: ${
              layout === 'vertical'
                ? `0.3em solid ${!selected && color['--ursa-text-secondary']}`
                : '0'
            };
          }
      }
      `
);
