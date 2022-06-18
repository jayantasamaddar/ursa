import { FC, ReactElement, ChangeEvent, forwardRef, Ref } from 'react';

interface Props {
  name: string;
  label: string;
  showLabel?: boolean;
  checked?: boolean;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  submit?: boolean;
  alert?: boolean;
}

const Checkbox: FC<Props> = forwardRef(
  (
    { className, name, label, showLabel, checked, onChange },
    ref: Ref<HTMLInputElement>
  ): ReactElement => {
    return (
      <>
        {/* {!props.hideLabel && <label htmlFor={props.value?.trim().toLowerCase()}>{props.value}</label>}
        <input id={props.value?.trim().toLowerCase()} type="radio" name={props.name?.trim().toLowerCase()} value={props.value} checked={props.checked ? true : false} onChange={props.onChange} /> */}

        <div className={`${className || ''}`}>
          <label
            className={`pr-10 ${showLabel ? '' : 'invisible'}`}
            htmlFor={name}
          >
            {label}
          </label>
          <input
            id={name}
            className="checkbox"
            name={name}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            ref={ref}
          />
        </div>
      </>
    );
  }
);

export default Checkbox;
