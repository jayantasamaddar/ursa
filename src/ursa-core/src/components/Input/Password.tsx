import { FC, ReactElement, ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  name?: string;
  value?: string;
  showLabel?: boolean;
  confirm?: boolean;
  withResetLink?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Password: FC<Props> = (props): ReactElement => {
  const { name, showLabel, value, confirm, withResetLink, onChange } = props;
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(prevState => !prevState);
  };

  const fieldName =
    name &&
    name
      .replace(/[^a-zA-Z ]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();

  return (
    <>
      {showLabel && (
        <label htmlFor="password" className="auth-forms-label">
          Password
        </label>
      )}
      {withResetLink && (
        <p className="forgot-password">
          <Link to="/account/reset-password" tabIndex={-1}>
            Forgot password?
          </Link>
        </p>
      )}

      <div className={`password-group flex my-10 ${confirm && 'my-0'}`}>
        <p className="show-password" onClick={togglePasswordVisibility}>
          <i className={`fas fa-eye${!passwordVisibility ? '-slash' : ''}`}></i>
        </p>
        <input
          id={fieldName ?? 'password'}
          type={`${passwordVisibility ? 'text' : 'password'}`}
          className={fieldName ?? 'password'}
          name={fieldName ?? 'password'}
          placeholder={`Enter your ${fieldName ?? 'Password'}`}
          value={value}
          required
          onChange={onChange}
        />
      </div>
      {confirm && (
        <div className="flex my-10">
          <input
            id="confirm-password"
            type="password"
            className="confirm-password password"
            name="confirm-password"
            placeholder="Confirm your Password"
            value={value}
            required
            onChange={onChange}
          />
        </div>
      )}
    </>
  );
};

export default Password;
