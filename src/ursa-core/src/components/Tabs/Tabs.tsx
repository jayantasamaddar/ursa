import React, { FC, ReactElement, useState, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { Tab, TabPanel } from './components';
import { TabsProps } from '../../types';

const UrsaTabs: FC<TabsProps> = ({
  className,
  items,
  layout
}): ReactElement => {
  /************************************************************************/
  // Initialize State and Memoize selectedTab
  /************************************************************************/
  const selectedTab = useMemo(() => {
    const indx = items.findIndex((item) => item.selected);
    return indx >= 0 ? indx : 0;
  }, [items]);

  const [data, setData] = useState(
    items.map((item, index) => ({
      ...item,
      selected: index === selectedTab ? true : false
    })) ?? []
  );

  const selected = data[data?.findIndex((item) => item.selected)];

  /************************************************************************/
  // Handle Tabs Click
  /************************************************************************/

  const toggleActive = useCallback(
    (indx: number) =>
      setData((prev) => [
        ...prev.slice(0, indx).map((item) => ({ ...item, selected: false })),
        { ...prev[indx], selected: !prev[indx].selected },
        ...prev.slice(indx + 1).map((item) => ({ ...item, selected: false }))
      ]),
    []
  );

  /************************************************************************/
  // Return Tabs JSX
  /************************************************************************/

  return (
    <div className={`Ursa-Tabs ${className || ''}`}>
      <ul className="Ursa-TabsHead" role="tablist">
        {data?.map(({ id, label, selected }, indx) => (
          <Tab
            id={id}
            label={label}
            selected={selected}
            layout={layout}
            key={indx}
            index={indx}
            onClick={() => (!selected ? toggleActive(indx) : null)}
          />
        ))}
      </ul>

      <TabPanel
        id={`${selected.id}-panel`}
        ariaLabelledBy={selected.id}
        content={selected.content}
      />
    </div>
  );
};

export const Tabs = styled(UrsaTabs)(
  ({ layout }) => `
    display: flex;
    flex-direction: ${layout === 'vertical' ? 'row' : 'column'};
    align-items: flex-start;
    justify-items: flex-start;
    gap: 4px;

    .Ursa-TabsHead {
      display: flex;
      flex-direction: ${layout === 'vertical' ? 'column' : 'row'};
    }
  `
);
