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

  const submitButton = screen.getByRole('button', { name: /submit/i });
  expect(submitButton).toBeDisabled();
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

test('An error message appears on empty password form', async () => {
  const user = userEvent.setup();
  render(<SignUp />);

  const password = screen.getByLabelText('Password');
  const email = screen.getByLabelText('Email');
  await user.click(password);
  await user.click(email);
  expect(screen.getByRole('alert', { name: 'Password is required' })).toBeInTheDocument();
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

test('Check whether input satisfies password conditions', async () => {
  const user = userEvent.setup();
  render(<SignUp />);
  const password = screen.getByLabelText('Password');

  await user.click(password);
  await user.keyboard('abcA#hell1');
  // password is validate!
});

test('Password should be more than 8 characters', async () => {
  const user = userEvent.setup();
  render(<SignUp />);
  const password = screen.getByLabelText('Password');
  const passwordRequirements = screen.getByTestId('password-requirements-length');
  await user.click(password);

  // Fail
  await user.keyboard('abcdef');
  expect(passwordRequirements).toHaveClass('password-requirements-fail');

  // Pass
  await user.keyboard('ghi');
  expect(passwordRequirements).toHaveClass('password-requirements-pass');
});

test('Password should include one special character', async () => {
  const user = userEvent.setup();
  render(<SignUp />);
  const password = screen.getByLabelText('Password');
  const passwordRequirements = screen.getByTestId('password-requirements-special-character');
  await user.click(password);

  // Fail
  await user.keyboard('abcd');
  expect(passwordRequirements).toHaveClass('password-requirements-fail');

  // Pass
  await user.keyboard('@');
  expect(passwordRequirements).toHaveClass('password-requirements-pass');
});

test('Password should include at least one number', async () => {
  const user = userEvent.setup();
  render(<SignUp />);
  const password = screen.getByLabelText('Password');
  const passwordRequirements = screen.getByTestId('password-requirements-number');
  await user.click(password);

  // Fail
  await user.keyboard('hello');
  expect(passwordRequirements).toHaveClass('password-requirements-fail');
  expect(passwordRequirements).not.toHaveClass('password-requirements-pass');

  // Pass
  await user.keyboard('1');
  expect(passwordRequirements).toHaveClass('password-requirements-pass');
  expect(passwordRequirements).not.toHaveClass('password-requirements-fail');
});

test('Password should be mixed upper and lowercase', async () => {
  const user = userEvent.setup();
  render(<SignUp />);
  const password = screen.getByLabelText('Password');
  const passwordRequirements = screen.getByTestId('password-requirements-mixed');
  await user.click(password);

  // Fail
  await user.keyboard('hello');
  expect(passwordRequirements).toHaveClass('password-requirements-fail');
  expect(passwordRequirements).not.toHaveClass('password-requirements-pass');

  // Pass
  await user.keyboard('A');
  expect(passwordRequirements).toHaveClass('password-requirements-pass');
  expect(passwordRequirements).not.toHaveClass('password-requirements-fail');
});

test('Submit button is enabled when an email and password have correct', async () => {
  const user = userEvent.setup();
  render(<SignUp />);
  const email = screen.getByLabelText('Email');
  const password = screen.getByLabelText('Password');
  const submitButton = screen.getByRole('button', { name: /submit/i });

  await user.click(email);
  await user.keyboard('hello@gmail.com');
  await user.click(password);
  await user.keyboard('Helloworld!23');

  expect(submitButton).toBeEnabled();
});
