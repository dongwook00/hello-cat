import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('An error message appears on empty email form', async () => {
  const user = userEvent.setup();
  render(<SignUp />);

  const email = screen.getByLabelText('Email');
  const password = screen.getByLabelText('Password');
  await user.click(email);
  await user.click(password);
  expect(screen.getByRole('alert', { name: 'Email is required' })).toBeInTheDocument();
});

test('An error message appears on wrong email pattern', async () => {
  const user = userEvent.setup();
  render(<SignUp />);

  const email = screen.getByLabelText('Email');
  const password = screen.getByLabelText('Password');
  await user.click(email);
  await user.keyboard('helloworld');
  await user.click(password);
  expect(screen.getByRole('alert', { name: 'Your email is not correct!' })).toBeInTheDocument();
});
