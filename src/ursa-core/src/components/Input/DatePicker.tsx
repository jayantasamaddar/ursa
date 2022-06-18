import { FC, ReactElement, ChangeEvent, forwardRef, Ref } from 'react';

interface Props {
  name: string;
  label?: string;
  showLabel?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  placeholder?: string;
  className?: string;
  errors?: string[];
}

const DatePicker: FC<Props> = forwardRef(
  (
    {
      name,
      label,
      showLabel,
      defaultValue,
      placeholder,
      onChange,
      errors,
      className,
    },
    ref: Ref<HTMLInputElement>
  ): ReactElement => {
    return (
      <>
        {showLabel && (
          <label htmlFor={name.trim().toLowerCase()}>{label ?? name}</label>
        )}
        <input
          type="date"
          name={name.trim().toLowerCase()}
          placeholder={placeholder ?? name}
          defaultValue={defaultValue}
          onChange={onChange}
          ref={ref}
        />
      </>
    );
  }
);

export default DatePicker;
