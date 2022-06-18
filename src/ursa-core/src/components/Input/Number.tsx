import { FC, ReactElement, ChangeEvent } from 'react';

interface Props {
  name: string;
  label: string;
  showLabel?: boolean;
  id?: string;
  className?: string;
  defaultValue?: number;
  value?: number;
  min?: number;
  max?: number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Number: FC<Props> = (props): ReactElement => {
  const name = props.name
    ?.replace(/[^a-zA-Z0-9 ]/g, '')
    .replace(/\s+/g, '_')
    .toLowerCase();
  return (
    <div className={`w-full ${props.className || ''}`}>
      <label className={`${props.showLabel ? '' : 'hidden'}`} htmlFor={name}>
        {props.label}
      </label>
      <input
        id={name}
        type="number"
        name={name}
        placeholder={props.label}
        value={props.value}
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Number;
