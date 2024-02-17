import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect(...).toBeInTheDocument()
import PasswordFields from '../signUp/passwordFields/PasswordFields';
 
describe('PasswordFields', () => {
  it('updates user password and verify password correctly', () => {
    // Mock setUserPassword and setUserPasswordVerify functions
    const setUserPassword = jest.fn();
    const setUserPasswordVerify = jest.fn();

    // Render the PasswordFields component
    const { getByPlaceholderText, getByLabelText } = render(
      <PasswordFields setUserPassword={setUserPassword} setUserPasswordVerify={setUserPasswordVerify} />
    );

    // Fill in new password field
    fireEvent.change(getByPlaceholderText('New password'), { target: { value: 'password123' } });

    // Fill in verify password field
    fireEvent.change(getByPlaceholderText('Password verify'), { target: { value: 'password123' } });

    // Expect setUserPassword and setUserPasswordVerify to be called with correct values
    expect(setUserPassword).toHaveBeenCalledWith('password123');
    expect(setUserPasswordVerify).toHaveBeenCalledWith('password123');
  });

  it('displays password length validation messages', () => {
    // Render the PasswordFields component
    const { getByText, getByPlaceholderText } = render(
      <PasswordFields setUserPassword={() => {}} setUserPasswordVerify={() => {}} />
    );

    // Fill in new password field with too short password
    fireEvent.change(getByPlaceholderText('New password'), { target: { value: 'pass' } });
    expect(getByText('Password too short')).toBeInTheDocument();

    // Fill in new password field with too long password
    fireEvent.change(getByPlaceholderText('New password'), { target: { value: 'averylongpasswordthatexceedsmaximumlength' } });
    expect(getByText('Password too long')).toBeInTheDocument();
  });

  it('displays password match validation messages', () => {
    // Render the PasswordFields component
    const { getByText, getByPlaceholderText } = render(
      <PasswordFields setUserPassword={() => {}} setUserPasswordVerify={() => {}} />
    );

    // Fill in new password field
    fireEvent.change(getByPlaceholderText('New password'), { target: { value: 'password123' } });

    // Fill in verify password field with non-matching password
    fireEvent.change(getByPlaceholderText('Password verify'), { target: { value: 'password456' } });
    expect(getByText('Passwords do not match')).toBeInTheDocument();

    // Fill in verify password field with matching password
    fireEvent.change(getByPlaceholderText('Password verify'), { target: { value: 'password123' } });
    expect(getByText('Passwords match!')).toBeInTheDocument();
  });
});
