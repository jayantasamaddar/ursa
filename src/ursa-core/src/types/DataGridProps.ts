export interface DataGridFilter {
  [key: string]: string | undefined;
}

export interface DataGridView {
  /** Unique id of the view */
  id: string;
  /** name attribute of the view */
  name?: string;
  /** Visible label of the view */
  label: string;
  /** Filters related to the view */
  filters?: DataGridFilter[];
  /** Whether it is the default filter when DataGrid mounts */
  default?: boolean;
}

export interface DataGridColumn {
  /** Unique id of the column */
  id: string;
  /** name attribute of the column */
  name?: string;
  /** Visible label of the column */
  label: string;
  /** If any link is provided */
  to?: string;
  /** type for Type checking on the column */
  type?: string;
  /** Width of the column */
  width?: number;
}

export interface DataGridRow {
  /** Unique id of the row */
  id: string;
  [key: string]: string | number | string[];
}

interface DataGridAction {
  /** Unique id attribute of the column */
  id: string;
  /** name attribute of the action */
  name?: string;
  /** Visible label of the action */
  label: string;
  /** Visible label attribute of the action */
  onClick?: () => void;
}

export interface ActionButtons {
  /** Actions that can be taken based on the data available in the Data Grid */
  actions: DataGridAction[];
  /** Truncate actions after a certain number of actions */
  truncateAfter?: number;
  /** Visible label for the truncated actions */
  truncateLabel?: string;
}

export interface DataGridProps {
  /** Class attribute of the DataGrid component */
  className?: string;
  /** Views related to the DataGrid */
  views?: DataGridView[];
  /** Columns  */
  columns?: DataGridColumn[];
  /** Rows  */
  rows?: DataGridRow[];
  /** Rows visible per page before pagination */
  rowsPerPage?: number;
  /** Action buttons available for the DataGrid */
  actionButtons?: ActionButtons;
  /** Trigger When a row is selected or deselected */
  onSelectChange?: (selectedRows: DataGridRow[] | []) => void;
}
