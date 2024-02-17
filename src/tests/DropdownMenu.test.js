import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import DropdownMenu from '../feed/topNavbar/dropdownMenu/DropdownMenu';

describe('DropdownMenu', () => {
  it('toggles the menu when the dropdown toggle button is clicked', () => {
    // Mock userData
    const userData = {
      FirstName: 'John',
      LastName: 'Doe',
      ProfilePhoto: 'profile.jpg',
    };

    // Render the DropdownMenu component within a Router context
    const { getByText, queryByText } = render(
      <Router>
        <DropdownMenu userData={userData} />
      </Router>
    );
    
    // Find and click the dropdown toggle button
    const toggleButton1 = getByText('Account');
    fireEvent.click(toggleButton1);

    // Ensure the display menu is displayed after clicking the toggle button
    expect(queryByText('Settings & privacy')).toBeInTheDocument();
    expect(queryByText('Display & accessibility')).toBeInTheDocument();
    expect(queryByText("Help & support")).toBeInTheDocument();
    expect(queryByText("Give feedback")).toBeInTheDocument();
    expect(queryByText("Log out")).toBeInTheDocument();

    // checking the seconde menu
    const toggleButton2 = getByText('Display & accessibility'); 
    fireEvent.click(toggleButton2);

    // Ensure the right menu is displayed  after clicking
    expect(queryByText('Settings & privacy')).not.toBeInTheDocument();
    expect(queryByText('Display & accessibility')).not.toBeInTheDocument();
  });
});
