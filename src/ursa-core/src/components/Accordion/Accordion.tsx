import React, { FC, ReactElement, useState } from 'react';
import styled from '@emotion/styled';
import { ChevronUpMinor, ChevronDownMinor } from '@zenius-one/ursa-icons';
import { Icon } from '../Icon';
import { UnstyledButton } from '../UnstyledButton';

export interface AccordionProps {
  className?: string;
  items: {
    label: string;
    content?: ReactElement;
    active?: boolean;
  }[];
}

const UrsaAccordion: FC<AccordionProps> = ({
  className,
  items
}): ReactElement => {
  const [data, setData] = useState(
    items?.map((item) => ({ ...item, active: item.active ?? false })) ?? []
  );

  const toggleActive = (indx: number) =>
    setData((prev) => [
      ...prev.slice(0, indx),
      { ...prev[indx], active: !prev[indx].active },
      ...prev.slice(indx + 1)
    ]);

  return (
    <div className={`Ursa-Accordion ${className || ''}`}>
      {data?.map(({ label, content, active }, indx) => (
        <div className="Ursa-AccordionItem" key={indx}>
          <div
            className="Ursa-AccordionHeader"
            onClick={() => toggleActive(indx)}
          >
            <h4>{label}</h4>
            <Icon
              source={active ? ChevronUpMinor : ChevronDownMinor}
              size="large"
            />
          </div>
          {active && <div className="Ursa-AccordionPanel">{content}</div>}
        </div>
      ))}
    </div>
  );
};

export const Accordion = styled(UrsaAccordion)(
  ({ theme: { color } }) => `
        .Ursa-AccordionHeader {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            padding: 4px;
            border-bottom: 1px solid ${color['--ursa-border-primary']};

            & > h4 {
              flex-grow: 1;
              color: ${color['--ursa-text-primary']};
              padding: 20px 10px;
            }
        }
        .Ursa-AccordionPanel {
            display: flex;
            color: ${color['--ursa-text-primary']};
            padding: 20px 4px;
        }
    `
);
