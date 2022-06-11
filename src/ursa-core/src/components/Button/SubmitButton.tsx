import React, { FC, ReactElement } from "react";

export interface Props {
  className?: string;
  name: string;
}

const SubmitButton: FC<Props> = ({ className, name }): ReactElement => {
  const classes = `SubmitButton my-10 p-15 font-bold bg-teal-600 border border-teal-600 rounded-2xl 
                    text-white hover:bg-teal-500 hover:border-teal-500 cursor-pointer
                    ${className ?? ""}`;
  return <input type="submit" value={name} className={classes} />;
};

export default SubmitButton;
