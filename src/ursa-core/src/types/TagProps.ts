import { MouseEvent } from 'react';

export interface TagProps {
  name: string;
  className?: string;
  onClick?(event: MouseEvent<HTMLDivElement>): void;
  onRemove?(): void;
}
