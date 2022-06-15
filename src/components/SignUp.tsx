import React, { SyntheticEvent } from 'react';
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
                const hasValue = /(?=.*[0-9])/.test(value);
                const isSpecialCharacter = /(?=.*[!@#$%^&*])/.test(value);

                console.log('hasValue', hasValue);
                console.log('isSpecialCharacter', isSpecialCharacter);
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
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
