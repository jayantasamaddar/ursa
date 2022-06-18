import { FC, ReactElement } from 'react';

interface Props {
  className?: string;
  children: string;
}

const FormError: FC<Props> = ({ children, className }): ReactElement => {
  return (
    <p className={`${className || ''} text-sm text-red-500`}>{children}</p>
  );
};

export default FormError;
