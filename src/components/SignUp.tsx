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
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  return (
    <div className="signup">
      <h5>Sign Up</h5>
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email</label>
          <input {...register('userEmail', { required: true, maxLength: 20 })} />
          {errors.userEmail && <label className="error-message">Fisrt name is required</label>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input {...register('password', { required: true, pattern: /^[A-Za-z]+$/i })} />
          {errors.password && <label className="error-message">Last name is required</label>}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input {...register('confirmPassword', { required: true, pattern: /^[A-Za-z]+$/i })} />
          {errors.confirmPassword && <label className="error-message">Last name is required</label>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
