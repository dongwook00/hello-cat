import React, { useState } from 'react';
import classNames from 'classnames';
import './SignUp.css';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  userEmail: string;
  password: string;
  confirmPassword: string;
}

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>({ mode: 'all' });
  const [minLength, setMinLength] = useState<boolean>(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="signup">
      <h5>Sign Up</h5>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="user-email">Email</label>
          <input
            id="user-email"
            type="text"
            {...register('userEmail', {
              required: true,
              pattern:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.userEmail?.type === 'required' && (
            <label
              aria-label="Email is required"
              htmlFor="user-email"
              role="alert"
              className="error-message"
            >
              Email is required
            </label>
          )}
          {errors.userEmail?.type === 'pattern' && (
            <label
              aria-label="Your email is not correct!"
              htmlFor="user-email"
              role="alert"
              className="error-message"
            >
              Your email is not correct!
            </label>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            {...register('password', {
              required: true,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value;
                const minLength = value.length >= 8;
                const hasValue = /(?=.*[0-9])/.test(value);
                const isSpecialCharacter = /(?=.*[!@#$%^&*])/.test(value);

                if (minLength) {
                  setMinLength(true);
                } else {
                  setMinLength(false);
                }

                // console.log('hasValue', hasValue);
                // console.log('isSpecialCharacter', isSpecialCharacter);
              },
              validate: {
                isNumber: (v) => /(?=.*[0-9])/.test(v),
                isSpecialCharacter: (v) => /(?=.*[!@#$%^&*])/.test(v),
              },
            })}
          />
          {errors.password?.type === 'required' && (
            <label
              aria-label="Password is required"
              htmlFor="password"
              role="alert"
              className="error-message"
            >
              Password is required
            </label>
          )}
          <p
            data-testid="password-requirements-length"
            className={classNames({
              'password-requirements-fail': !minLength,
              'password-requirements-pass': minLength,
            })}
          >
            Password should be more than 8 characters
          </p>
          <p data-testid="password-requirements" className="password-conditd-requirements-fail">
            Password should include one special character
          </p>
          <p data-testid="password-requirements" className="password-conditd-requirements-fail">
            Password should include at least one number
          </p>
          <p data-testid="password-requirements" className="password-conditd-requirements-fail">
            Password should be mixed upper and lowercase
          </p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
