import { ReactNode, KeyboardEvent } from 'react';

type Layout = 'vertical' | 'horizontal';

interface TabItem {
  /** The unique ID of the Tab */
  id: string;
  /** The label to display for the Tab */
  label: string;
  /** The content to display inside the corresponding Tab Panel */
  content?: ReactNode;
  /** Whether this Tab is selected when initialized  */
  selected?: boolean;
}

export interface TabsProps {
  /** The className attribute of the Tabs */
  className?: string;
  /** Whether Tabs are `vertical` or `horizontal` */
  layout?: Layout;
  /** The details of each Tab and its corresponding content */
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
