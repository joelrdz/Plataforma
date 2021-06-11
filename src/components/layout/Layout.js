import MainNavigation from './MainNavigation';

export default function Layout({ children }) {
  return (
    <div className="app-wrapper">
      <div className="app-wrapper__content">
        <header>
          <span className="logo">Plataforma</span>
        </header>
        <main>{children}</main>
      </div>
      <div className="app-wrapper__sidebar">
        <MainNavigation />
      </div>
    </div>
  );
}