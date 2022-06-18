import { FC, ReactElement, ChangeEvent, forwardRef, Ref } from 'react';

interface Props {
  name: string;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  checked?: boolean;
  className?: string;
}

const Radio: FC<Props> = forwardRef(
  (
    { className, label, name, value, checked, onChange },
    ref: Ref<HTMLInputElement>
  ): ReactElement => {
    return (
      <div className={`align-middle ${className || ''}`}>
        <input
          ref={ref}
          className="text-standard w-auto"
          id={label?.toLowerCase()}
          type="radio"
          name={name}
          value={value ?? label?.toLowerCase()}
          onChange={onChange}
          checked={checked}
        />
        <label className="text-standard pl-10" htmlFor={label?.toLowerCase()}>
          {label}
        </label>
      </div>
    );
  }
);

export default Radio;
