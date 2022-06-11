import {
  FC,
  ReactElement,
  MouseEvent,
  ChangeEvent,
  forwardRef,
  useRef,
  Ref,
  useImperativeHandle,
} from "react";

interface Props {
  name: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  submit?: boolean;
  alert?: boolean;
}

const UploadButton: FC<Props> = forwardRef(
  (
    { className, name, submit, disabled, alert, onClick, onChange },
    ref: Ref<HTMLInputElement>
  ): ReactElement => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const classes = `UploadButton p-10 font-bold rounded-2xl ${
      disabled
        ? "text-slate-900 bg-slate-700 border border-slate-700 hover:bg-slate-600 hover:border-slate-600"
        : alert
        ? "text-white bg-red-800 border border-red-800 hover:bg-red-600 hover:border-red-600"
        : "text-white bg-teal-600 border border-teal-600 hover:bg-teal-500 hover:border-teal-500"
    } 
    ${className ?? ""}`;
    return (
      <div className="Ursa-UploadButton">
        <button
          type="button"
          className={classes}
          disabled={disabled}
          onClick={() => inputRef.current?.click()}
        >
          {name}
        </button>
        <input
          type="file"
          hidden
          ref={inputRef}
          className={classes}
          name={name}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default UploadButton;
