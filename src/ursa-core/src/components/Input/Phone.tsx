import { FC, ReactElement, ChangeEvent, forwardRef, Ref } from 'react';

interface Props {
  className?: string;
  showLabel?: boolean;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string;
  value?: string;
  errors?: string[];
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Phone: FC<Props> = forwardRef(
  (
    {
      className,
      showLabel,
      minLength,
      maxLength,
      defaultValue,
      value,
      errors,
      onChange,
    },
    ref: Ref<HTMLInputElement>
  ): ReactElement => {
    //const [isError, setIsError] = useState(false);

    // const onChangeHandler = (event) => {
    //     onChange(event);
    //     const numLength = (event.target.value).length;
    //     const containsSpecialChar = parseInt(numLength !== 0 && event.target.value).toString().length !== numLength  ? true : false;
    //     setIsError(numLength !== 10 || containsSpecialChar ? true : false);
    // }
    return (
      <div
        className={`align-middle w-full ${className || ''}`}
        data-field="phone"
      >
        {showLabel && <label htmlFor="phone">Phone</label>}
        <input
          ref={ref}
          id="phone"
          type="tel"
          name="phone"
          placeholder="Phone Number"
          minLength={minLength}
          maxLength={maxLength}
          value={value}
          defaultValue={defaultValue}
          autoComplete="off"
          onChange={onChange}
        />

        {/* Error Handling - if showError is passed as props (Default) */}
        {/* {!errors && showError && isError && 
            <div className="alert">
                <p className="alert text-red-500">Please enter a valid Mobile Number</p>
            </div>} */}

        {/* Error Handling - If errors = [] is passed as props */}
        {errors && errors?.length > 0 && (
          <div className="alert">
            {errors.map((error, indx) => (
              <p className="alert text-red-500" key={indx}>
                {error}
              </p>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default Phone;
