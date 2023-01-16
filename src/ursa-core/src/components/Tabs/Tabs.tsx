import React, {
  ReactElement,
  useState,
  useCallback,
  useMemo,
  KeyboardEvent,
  useRef
} from 'react';
import styled from '@emotion/styled';
import { Tab, TabPanel } from './components';
import { TabsProps } from '../../types';

const UrsaTabs = ({ className, items, layout }: TabsProps): ReactElement => {
  /************************************************************************/
  // Initialize State, Variables, Ref and Memoize startingTabIndex
  /************************************************************************/
  const startingTabIndex = useMemo(() => {
    const indx = items.findIndex((item) => item.selected);
    return indx >= 0 ? indx : 0;
  }, [items]);

  const [data, setData] = useState<TabsProps['items']>(
    items.map((item, index) => ({
      ...item,
      selected: index === startingTabIndex ? true : false
    })) ?? []
  );

  const tabRef = useRef<HTMLButtonElement[]>([]);

  /************************************************************************/
  // Event Handlers
  /************************************************************************/
  const toggleActive = useCallback((indx: number) => {
    setData((prev) =>
      prev.map((item, i) => ({
        ...item,
        selected: indx === i ? true : false
      }))
    );
    tabRef.current[indx].focus();
  }, []);

  /**
   * Switches Tab either in the forwards or backwards direction
   * @param target - `HTMLButtonElement`
   * @param direction - `"forwards"` | `"backwards"` | `undefined`
   */
  const switchTab = (
    target: HTMLButtonElement,
    direction?: 'forwards' | 'backwards'
  ) => {
    const {
      dataset: { index }
    } = target;
    const i = parseInt(index as string);

    let switchIndx: number;
    switch (direction) {
      case 'backwards':
        switchIndx = i === 0 ? data.length - 1 : i - 1;
        break;
      default:
        switchIndx = i === data.length - 1 ? 0 : i + 1;
        break;
    }
    toggleActive(switchIndx);
  };

  /** Keyboard Accessibility for Tabs */
  const handleKeyUp = useCallback((e: KeyboardEvent<HTMLButtonElement>) => {
    switch (e.key) {
      case 'ArrowRight':
        if (layout !== 'vertical') {
          switchTab(e.target as HTMLButtonElement, 'forwards');
        }
        break;
      case 'ArrowLeft':
        if (layout !== 'vertical') {
          switchTab(e.target as HTMLButtonElement, 'backwards');
        }
        break;
      case 'ArrowDown':
        if (layout === 'vertical') {
          switchTab(e.target as HTMLButtonElement, 'forwards');
        }
        break;
      case 'ArrowUp':
        if (layout === 'vertical') {
          switchTab(e.target as HTMLButtonElement, 'backwards');
        }
        break;
      case 'Home':
        tabRef.current[0].click();
        break;
      case 'End':
        tabRef.current.at(-1)?.click();
        break;
      default:
        break;
    }
  }, []);

  /************************************************************************/
  // Return Tabs JSX
  /************************************************************************/

  return (
    <div className={`Ursa-Tabs ${className || ''}`}>
      <ul className="Ursa-TabsHead" role="tablist">
        {data?.map(({ id, label, selected }, indx) => (
          <Tab
            id={id}
            ref={(tab) => (tabRef.current[indx] = tab as HTMLButtonElement)}
            label={label}
            selected={selected}
            layout={layout}
            key={indx}
            index={indx}
            onClick={() => (!selected ? toggleActive(indx) : null)}
            onKeyUp={handleKeyUp}
          />
        ))}
      </ul>

      <div className="Ursa-TabContent">
        {data?.map(({ id, content, selected }, indx) => (
          <TabPanel
            id={`${id}-panel`}
            className={selected ? 'show' : 'hidden'}
            key={indx}
            ariaLabelledBy={id}
          >
            {content}
          </TabPanel>
        ))}
      </div>
    </div>
  );
};

export const Tabs = styled(UrsaTabs)(
  ({ layout }) => `
    display: flex;
    flex-direction: ${layout === 'vertical' ? 'row' : 'column'};
    align-items: flex-start;
    justify-items: flex-start;
    gap: 0.25rem;

    .Ursa-TabsHead {
      display: flex;
      flex-direction: ${layout === 'vertical' ? 'column' : 'row'};
    }
  `
);
