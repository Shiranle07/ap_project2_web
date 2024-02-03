import './DarkMode.css';

import React, { useState, useEffect } from 'react';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode styles
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const btnDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button className="moon-icon-btn" onClick={btnDarkMode}>
      {darkMode ? <i className="bi bi-sun"> Light mode </i> : <i className="bi bi-moon"> Night mode </i>} 
    </button>
  );
};

export default DarkMode;
