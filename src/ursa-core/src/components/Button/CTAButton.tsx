import React, { FC, MouseEvent, ReactElement } from "react";
import { Link } from "react-router-dom";

export interface Props {
  className?: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  name: string;
  to?: string;
  submit?: boolean;
}

const CTAButton: FC<Props> = ({
  className,
  name,
  to,
  submit,
  onClick,
}): ReactElement => {
  const classes = `CTAButton my-10 p-15 font-bold bg-teal-600 border border-teal-600 rounded-2xl 
                    text-white hover:bg-teal-500 hover:border-teal-500 
                    ${className ?? ""}`;
  return (
    <>
      {to ? (
        <Link to={to}>
          <button type={`${submit ? "submit" : "button"}`} className={classes}>
            {name}
          </button>
        </Link>
      ) : (
        <button
          type={`${submit ? "submit" : "button"}`}
          className={classes}
          onClick={onClick}
        >
          {name}
        </button>
      )}
    </>
  );
};

export default CTAButton;
