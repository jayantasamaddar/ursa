import {
  FC,
  ReactElement,
  MouseEvent,
  ChangeEvent,
  useState,
  useEffect,
  Ref,
  forwardRef,
  useRef,
  useImperativeHandle,
  useCallback,
  cloneElement,
} from 'react';
import axios from 'axios';
import { Card } from '../cards';
import { Modal } from '../modal';

interface Props {
  className?: string;
  name: string;
  label: string;
  placeholder?: string;
  dataURL: string;
  fields: string[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  addButton?: boolean;
  errors?: string[];
  modal?: ReactElement;
  modalHeight?: string;
}

interface Data {
  [key: string]: any;
}

interface RefreshList {
  status: number;
  data: Data;
  lookup: string;
}

const DataLookupField: FC<Props> = forwardRef(
  (
    {
      className,
      name,
      label,
      placeholder,
      dataURL,
      fields,
      onChange,
      addButton,
      errors,
      modal,
      modalHeight,
    },
    ref: Ref<HTMLInputElement>
  ): ReactElement => {
    /*********************************************************************************/
    // Initialize State and Refs
    /********************************************************************************/

    const [data, setData] = useState<Data[]>([]);
    const [search, setSearch] = useState('');
    const [ID, setID] = useState('');
    const [displayState, setDisplayState] = useState(false);

    const [openModal, setOpenModal] = useState(false);
    const [renderLookup, setRenderLookup] = useState(true);

    const toggleRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const optionsRef = useRef<(HTMLLIElement | null)[]>([]);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    /*********************************************************************************/
    // useEffect - Fetch Data
    /********************************************************************************/
    useEffect(() => {
      if (dataURL && renderLookup) {
        (async () => {
          try {
            const { data: dataArray, status } = await axios.get(
              dataURL || '' + fields?.join()
            );
            if (status === 200) setData(dataArray);
          } catch (error) {
            console.log(error);
          }
        })();
        return renderLookup && setRenderLookup(false);
      }
    }, [dataURL, fields, renderLookup]);

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

    const setSearchValue = (event: MouseEvent<HTMLLIElement>) => {
      const target = (event.target as HTMLElement)?.closest('.Ursa-LookupCard');
      setSearch(target?.querySelector('.name')?.textContent ?? '');
      setDisplayState(false);
      setID((target as HTMLElement)?.dataset?.id ?? '');
      inputRef.current?.focus();
      //inputRef.current?.readOnly = true;
    };

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setID('');
      const val = event.target.value;
      val.length > 0 ? setDisplayState(true) : setDisplayState(false);
      setSearch(val);
      onChange(event);
    };

    /*********************************************************************************/
    // Modal Related Functions
    /********************************************************************************/

    const refreshList = useCallback(
      ({ status, data, lookup }: RefreshList): void => {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: false,
        });
        if ([200, 201].includes(status)) {
          setRenderLookup(true);
          setSearch(data?.[lookup] ?? data?.[name]);
          setID(data?.id ?? data?._id);
          inputRef.current?.focus();
          inputRef.current?.dispatchEvent(clickEvent);
          toggleDisplay();
        }
      },
      [name]
    );

    /*********************************************************************************/
    // Render JSX
    /********************************************************************************/

    return (
      <>
        <div
          className={`Ursa-LookupFieldGroup flex-col w-full ${className || ''}`}
        >
          <div
            className="Ursa-LookupFieldAutoComplete flex flex-col"
            ref={toggleRef}
          >
            <div
              className="Ursa-LookupFieldInput flex-col"
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
                value={search}
                placeholder={placeholder}
                onClick={toggleDisplay}
                onChange={onChangeHandler}
                onKeyUp={e => e.key === 'Escape' && setDisplayState(false)}
                onSelect={onChange}
                ref={inputRef}
                autoComplete="off"
              />

              <input
                id={`${label
                  ?.replace(/[^a-zA-Z ]/g, '')
                  .replace(/\s+/g, '-')
                  .toLowerCase()}_id`}
                type="hidden"
                name={`${label
                  ?.replace(/[^a-zA-Z ]/g, '')
                  .replace(/\s+/g, '-')
                  .toLowerCase()}_id`}
                value={ID}
                onSelect={onChange}
              />
            </div>

            {displayState && (
              <div className="Ursa-LookupFieldOptionsGroup relative">
                <div className="Ursa-LookupFieldOptionsContainer flex-col absolute w-full top-full z-10">
                  <div className="Ursa-LookupFieldOptions flex flex-col options bg-slate-900 overflow-x-auto overscroll-x-contain">
                    <ul className="max-h-[250px]">
                      {data
                        .filter(
                          e =>
                            e[name]
                              .toLowerCase()
                              .indexOf(search.toLowerCase()) >= 0
                        )
                        .map((item, index) => {
                          return (
                            <li
                              className="Ursa-LookupCard hover:bg-orange-700 cursor-pointer"
                              key={index}
                              onClick={setSearchValue}
                              ref={card => (optionsRef.current[index] = card)}
                              data-id={item?.id || item?._id}
                            >
                              <Card
                                name={item[name]}
                                fields={Object.entries(item).filter(e =>
                                  fields?.includes(e[0])
                                )}
                              />
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                  {addButton && (
                    <div
                      className="Ursa-LookupFieldAddNew flex p-20 cursor-pointer bg-slate-800 hover:bg-slate-700 items-center"
                      onClick={() => setOpenModal(true)}
                    >
                      <i className="fas fa-plus-circle text-l"></i>
                      <span className="px-8 text-standard">
                        Add New {label}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
            {/* Error Handling - If errors = [] is passed as props */}
            {errors?.length && (
              <div className="alert">
                {errors?.map((error, indx) => (
                  <p className="alert text-red-500" key={indx}>
                    {error}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        {addButton && modal && (
          <Modal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            height={modalHeight}
          >
            <>
              <div className="title">
                <h1 className="font-bold">Add {label}</h1>
              </div>
              {cloneElement(modal, { onSuccess: refreshList })}
            </>
          </Modal>
        )}
      </>
    );
  }
);

export default DataLookupField;
