import "./style.css";
import React from 'react';
import { useDarkMode, Theme } from '../../hooks/useDarkMode';

export default function Landing() {
  const [theme, toggleTheme] = useDarkMode()



  return (
    <div className="container">
      <button onClick={toggleTheme}>
      </button>
      Hello world
    </div>
  );
}
