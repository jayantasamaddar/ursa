import React, { FC, ReactElement } from 'react';
import styled from '@emotion/styled';
import { TabProps } from '../../../types';

const UrsaTab: FC<TabProps> = ({
  id,
  label,
  selected,
  className,
  index,
  onClick
}): ReactElement => {
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
        type="button"
        role="tab"
        aria-label={label}
        aria-selected={selected ? 'true' : 'false'}
        aria-controls={`${id}-panel`}
        onClick={() => onClick(index)}
        tabIndex={selected ? 0 : -1}
      >
        {label}
      </button>
    </li>
  );
};

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
