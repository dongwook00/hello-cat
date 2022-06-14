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
  const guide = screen.getByTestId('password-guide-length');

  await user.click(password);
  await user.keyboard('abcdefg');
  expect(guide).toHaveStyle('background-color: grey');
  await user.keyboard('edd');
  expect(guide).toHaveStyle('background-color: blue');
});

test('Password should include one special character', async () => {
  const user = userEvent.setup();
  render(<SignUp />);
  const password = screen.getByLabelText('Password');
  const guide = screen.getByTestId('password-guide-special-character');

  await user.click(password);
  await user.keyboard('hello@');

  expect(guide).toHaveStyle('background-color: blue');
});

test('Password should include at least one number', async () => {
  const user = userEvent.setup();
  render(<SignUp />);
  const password = screen.getByLabelText('Password');
  const guide = screen.getByTestId('password-guide-number');

  await user.click(password);
  await user.keyboard('hello1');

  expect(guide).toHaveStyle('background-color: blue');
});

test('Password should be mixed upper and lowercase', async () => {
  const user = userEvent.setup();
  render(<SignUp />);
  const password = screen.getByLabelText('Password');
  const guide = screen.getByTestId('password-guide-mixed-upper-and-lowercase');

  await user.click(password);
  await user.keyboard('Hello');

  expect(guide).toHaveStyle('background-color: blue');
});
