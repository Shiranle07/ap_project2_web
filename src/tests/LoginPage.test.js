import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For expect(...).toBeInTheDocument()
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import LoginPage from '../loginPage/LoginPage';

describe('LoginPage', () => {
  // Mock userData
  const userData = {
    FirstName: 'John',
    LastName: 'Doe',
    Email: 'john@example.com',
    Password: 'password123',
    ProfilePhoto: 'profile.jpg',
    IsLogIn: true,
  };   

  it('calls handleLogin when form is submitted with correct email and password', () => {
    // Mock functions
    const setUserData = jest.fn();

    // Render the LoginPage with mocked props and functions wrapped in Router
    const { getByPlaceholderText, getByRole } = render(
      <Router>
        <LoginPage toggleForm={() => {}} userData={userData} setUserData={setUserData} />
      </Router>
    );

    // Fill in email and password fields
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'password123' } });

    // Submit the form
    fireEvent.click(getByRole('button', { name: /Log In/i }));

    // Expect handleLogin to be called with the correct email and password
    expect(setUserData).toHaveBeenCalledWith({
      ...userData,
      IsLogIn: true,
    });
});


it('displays an error message when form is submitted with incorrect email or password', () => {
    // Mock functions
    const setUserData = jest.fn();

    // Render the LoginPage with mocked props and functions wrapped in Router
    const { getByPlaceholderText, getByText, getByTestId } = render(
      <Router>
        <LoginPage toggleForm={() => {}} userData={userData} setUserData={setUserData} />
      </Router>
    );

    // Fill in email and password fields with incorrect values
    fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'wrong@example.com' } });
    fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'wrongpassword' } });

    // Submit the form
    fireEvent.click(getByText('Log In')); // Ensure correct button is clicked

    // Expect error message to be displayed
    expect(getByTestId('error-message')).toBeInTheDocument();
});});  
