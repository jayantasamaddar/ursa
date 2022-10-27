import { ReactNode, KeyboardEvent } from 'react';

type Layout = 'vertical' | 'horizontal';

interface TabItem {
  id: string;
  label: string;
  content?: ReactNode;
  selected?: boolean;
}

export interface TabsProps {
  className?: string;
  layout?: Layout;
  items: TabItem[];
}

export interface TabProps {
  /** An unique identifier for the tab */
  id: string;
  /** The readable and visible label */
  label: string;
  /** The index number of the Tab item */
  index: number;
  /** The layout of the Tabs */
  layout?: Layout;
  /** Whether the tab is selected */
  selected?: boolean;
  /** Tabs classname attribute */
  className?: string;
  /** onClick to Select Tab */
  onClick: (indx: number) => void;
  /** Callback when KeyUp */
  onKeyUp?(event: KeyboardEvent<HTMLButtonElement>): void;
}

export interface TabPanelProps {
  /** An unique identifier for the Tab Panel. The Tab aria-controls accesses this to relate. */
  id?: string;
  /** aria-labelledby attribute. Same as id of the Tab */
  ariaLabelledBy: string;
  /** The content to display inside Tab Panel */
  children: ReactNode;
  /** Tab Panel classname attribute */
  className?: string;
}
