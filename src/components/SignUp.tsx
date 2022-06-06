import React from 'react';
import './SignUp.css';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  firstName: string;
  lastName: string;
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
          <label>First Name</label>
          <input {...register('firstName', { required: true, maxLength: 20 })} />
          {errors.firstName && 'Fisrt name is required'}
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input {...register('lastName', { required: true, pattern: /^[A-Za-z]+$/i })} />
          {errors.lastName && 'Last name is required'}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
