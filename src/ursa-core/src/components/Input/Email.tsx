import {
  FC,
  ReactElement,
  ChangeEvent,
  forwardRef,
  Ref,
  useState,
} from 'react';
import isEmail from 'validator/es/lib/isEmail';

interface Props {
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  defaultValue?: string;
  required?: boolean;
  showLabel?: boolean;
  showError?: boolean;
}

const Email: FC<Props> = forwardRef(
  (
    {
      className,
      onChange,
      defaultValue,
      value,
      required,
      showLabel,
      showError,
    },
    ref: Ref<HTMLInputElement>
  ): ReactElement => {
    const [isError, setIsError] = useState(false);

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event);
      required
        ? setIsError(!isEmail(event.target.value))
        : setIsError(
            event.target.value !== '' ? !isEmail(event.target.value) : false
          );
    };

    return (
      <div
        className={`align-middle w-full ${className || ''}`}
        data-field="email"
      >
        {showLabel && (
          <label className={`${required ? 'required' : ''}`} htmlFor="email">
            E-Mail
          </label>
        )}
        <input
          ref={ref}
          id="email"
          className="email"
          type="email"
          name="email"
          placeholder="E-Mail Address"
          autoComplete="off"
          required={required}
          value={value}
          defaultValue={defaultValue}
          onChange={onChangeHandler}
        />
        {showError && isError && (
          <div className="alert">
            <p className="alert text-red-500">Please enter a valid E-Mail ID</p>
          </div>
        )}
      </div>
    );
  }
);

export default Email;
