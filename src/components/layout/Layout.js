import MainNavigation from './MainNavigation';

export default function Layout({ children }) {
  return (
    <>
      <h1>Plataforma</h1>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
}