import React from 'react';
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
  } = useForm<IFormInput>({ mode: 'onBlur' });
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
            <label htmlFor="user-email" role="alert" className="error-message">
              pattern error
            </label>
          )}
          {errors.userEmail?.type === 'maxLength' && (
            <label htmlFor="user-email" role="alert" className="error-message">
              Maxlength
            </label>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            {...register('password', { required: true, pattern: /^[A-Za-z]+$/i })}
          />
          {errors.password && (
            <label htmlFor="password" role="alert" className="error-message">
              Last name is required
            </label>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="text"
            {...register('confirmPassword', { required: true, pattern: /^[A-Za-z]+$/i })}
          />
          {errors.confirmPassword && (
            <label htmlFor="confirm-password" role="alert" className="error-message">
              Last name is required
            </label>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
