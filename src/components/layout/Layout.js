import { useState } from 'react';

import MainNavigation from './MainNavigation';

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleSidebarHandler() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className="app-wrapper">
      <div className="app-wrapper__content">
        <header className="app-header">
          <div>
            <span className="logo">Plataforma</span>
          </div>
          <div className="toggle-box">
            <button className={`toggle ${menuOpen ? "menu-open" : ""}`} onClick={toggleSidebarHandler}>Menu</button>
          </div>
        </header>

        <main>{children}</main>
      </div>
      <div className={`app-wrapper__sidebar ${menuOpen ? "menu-open" : ""}`}>
        <MainNavigation onSidebarClose={toggleSidebarHandler} />
      </div>
    </div>
  );
}