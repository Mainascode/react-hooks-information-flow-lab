import React from 'react';

const Header = ({ onDarkModeClick }) => {
  return (
    <header>
      <button onClick={onDarkModeClick}>Toggle Mode</button>
    </header>
  );
};

export default Header;

