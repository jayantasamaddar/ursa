import React, { useState, ReactElement, ReactNode } from 'react';
import { AccordionHeader, AccordionPanel } from './components';

export interface AccordionProps {
  /** The className attribute of the Accordion element */
  className?: string;
  /** The details of each Accordion Item and its corresponding content */
  items: {
    /** The unique id of the Accordion item */
    id: string;
    /** The label to display for the Accordion Item */
    label: string;
    /** The content to display for the Accordion Item */
    content?: ReactNode;
    /** Whether Accordion Item is active */
    active?: boolean;
  }[];
}

export const Accordion = ({
  className,
  items
}: AccordionProps): ReactElement => {
  const [data, setData] = useState(
    items?.map((item) => ({ ...item, active: item.active ?? false })) ?? []
  );

  const toggleActive = (indx: number) =>
    setData((prev) =>
      prev.map((item, i) => ({
        ...item,
        active: indx === i ? !item.active : item.active
      }))
    );

  return (
    <div className={`Ursa-AccordionGroup ${className || ''}`}>
      {data?.map(({ id, label, content, active }, indx) => (
        <div className="Ursa-AccordionItem" key={indx}>
          <AccordionHeader
            id={id}
            label={label}
            active={active}
            onClick={() => toggleActive(indx)}
          />
          <AccordionPanel
            id={`${id}-label`}
            ariaLabelledBy={id}
            active={active}
          >
            {content}
          </AccordionPanel>
        </div>
      ))}
    </div>
  );
};
