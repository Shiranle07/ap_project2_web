import LoginPage from './loginPage/LoginPage';
import './App.css';
import LoginLogo from './loginPage/loginLogo/LoginLogo';

import React from 'react';
import DarkMode from './darkMode/DarkMode';

function App() {
  return (
    <div>
        <LoginPage/>
        <LoginLogo/>
        <DarkMode />

    </div>
  );
}

export default App;
