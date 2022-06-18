import {
  FC,
  ReactElement,
  SyntheticEvent,
  ChangeEvent,
  useState,
  useEffect,
  useRef,
  forwardRef,
  Ref,
  useImperativeHandle,
  MouseEvent,
} from 'react';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  value?: string;
  type?: string;
  className?: string;
  errors?: string[];
  options: any[];
  addOption?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LookupField: FC<Props> = forwardRef(
  (
    {
      label,
      name,
      placeholder,
      value,
      options,
      onChange,
      className,
      errors,
      addOption,
    },
    ref: Ref<HTMLInputElement>
  ): ReactElement => {
    /*********************************************************************************/
    // Initialize State and Refs
    /********************************************************************************/

    const [displayState, setDisplayState] = useState(false);
    const [search, setSearch] = useState('');
    const [ID, setID] = useState('');
    const toggleRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    /*********************************************************************************/
    // useEffect - Close dropdown on clicking outside
    /********************************************************************************/
    useEffect(() => {
      const handler = (event: MouseEvent<HTMLElement>) => {
        try {
          if (!toggleRef.current?.contains(event.target as HTMLElement))
            setDisplayState(false);
          else return;
        } catch (error) {
          return;
        }
      };
      document.addEventListener('mousedown', (e: Event) => handler);

      return () => {
        try {
          document.removeEventListener('mousedown', (e: Event) => handler);
        } catch (e) {}
      };
    }, [displayState]);

    /*********************************************************************************/
    // State Modifier Functions
    /********************************************************************************/

    const toggleDisplay = () => setDisplayState(prev => !prev);

    const setSearchValue = (event: SyntheticEvent) => {
      const { textContent, dataset } = event.target as HTMLLIElement;
      setSearch(textContent ?? '');
      setDisplayState(false);
      setID(dataset.id ?? '');
      inputRef.current?.focus();
      //inputRef.current.readOnly = true;
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setID('');
      const { value } = event.target;
      value.length > 0 ? setDisplayState(true) : setDisplayState(false);
      setSearch(value);
      onChange && onChange(event);
    };

    /*********************************************************************************/
    // Render JSX
    /********************************************************************************/

    return (
      <div
        className={`LookupFieldGroup flex flex-col w-full ${className || ''}`}
      >
        <div className="LookupFieldAutoComplete flex flex-col" ref={toggleRef}>
          <div
            className="LookupFieldInput flex-col"
            data-field={name}
            data-id={ID}
            data-value={search}
          >
            <label className="" htmlFor={name}>
              {label}
            </label>
            <input
              id={name}
              className="text-standard"
              type="text"
              name={name}
              value={search || value}
              placeholder={placeholder}
              onClick={toggleDisplay}
              onChange={onChangeHandler}
              onSelect={onChange}
              ref={inputRef}
              autoComplete="off"
            />
            <input
              id={`${label
                ?.replace(/[^a-zA-Z ]/g, '')
                .replace(/\s+/g, '-')
                .toLowerCase()}_id`}
              name={`${label
                ?.replace(/[^a-zA-Z ]/g, '')
                .replace(/\s+/g, '-')
                .toLowerCase()}_id`}
              type="hidden"
              value={ID}
              onSelect={onChange}
            />
          </div>
          {displayState && (
            <div className="LookupFieldOptionsGroup relative">
              <div className="flex-col absolute w-full top-full z-10">
                <div className="LookupFieldOptions flex flex-col options bg-slate-900 overflow-x-auto overscroll-x-contain">
                  <ul className="max-h-[200px]">
                    {options
                      .filter(
                        ({ name }) =>
                          name?.toLowerCase().indexOf(search?.toLowerCase()) >=
                          0
                      )
                      .map((item, index) => {
                        return (
                          <div className="hover:bg-orange-700" key={index}>
                            <li
                              className="p-8 m-8 text-standard cursor-pointer"
                              onClick={setSearchValue}
                              data-id={item._id}
                            >
                              {item.name}
                            </li>
                          </div>
                        );
                      })}
                  </ul>
                </div>
                {addOption && (
                  <div className="LookupFieldAddNew flex p-10 cursor-pointer bg-slate-800 hover:bg-slate-700 items-center">
                    <i className="fas fa-plus-circle text-l"></i>
                    <span className="px-8 text-standard">Add New</span>
                  </div>
                )}
              </div>
            </div>
          )}
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
      </div>
    );
  }
);

export default LookupField;
