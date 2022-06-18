import { FC, ReactElement, ChangeEvent, forwardRef, Ref } from 'react';

interface Option {
  label: string;
  value: string;
}

interface Props {
  name: string;
  label: string;
  options: Option[];
  type?: string;
  showLabel?: boolean;
  id?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<Props> = forwardRef(
  (
    { id, name, type, label, options, value, onChange },
    ref: Ref<HTMLSelectElement>
  ): ReactElement => {
    return (
      <>
        <div className={`${type}-group flex flex-col gap-10 py-10`}>
          <label htmlFor={name} className="pb-10">
            {label}
          </label>
          <>
            <select
              id={id ?? name}
              className="dropdown"
              name={name}
              value={value}
              onChange={onChange}
              ref={ref}
            >
              <option value="">--Select--</option>
              {options?.map((option, index) => {
                return (
                  <option value={option.value} key={index}>
                    {option.label}
                  </option>
                );
              })}
            </select>
          </>
        </div>
      </>
    );
  }
);

export default Select;
