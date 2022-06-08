import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUp from './SignUp';

test('renders correctly', () => {
  render(<SignUp />);

  const emailLabel = screen.getByLabelText('Email');
  expect(emailLabel).toBeInTheDocument();

  const passwordLabel = screen.getByLabelText('Password');
  expect(passwordLabel).toBeInTheDocument();

  const confirmPasswordLabel = screen.getByLabelText('Confirm Password');
  expect(confirmPasswordLabel).toBeInTheDocument();
});
