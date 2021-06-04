import MainNavigation from './MainNavigation';

export default function Layout({ children }) {
  return (
    <div className="app-wrapper">
      <div className="app-wrapper__content">
        <header>
          <h1>Plataforma</h1>
        </header>
        <main>{children}</main>
      </div>
      <div className="app-wrapper__sidebar">
        <MainNavigation />
      </div>
    </div>
  );
}