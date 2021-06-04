import { Switch, Route } from 'react-router-dom';

import ProjectsPage from './pages/Projects';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

function App() {
  return (
    <>
      <div>Plataforma React</div>
      <Switch>
        <Route path='/' exact>
          <ProjectsPage />
        </Route>
        <Route path='/servicios'>
          <AboutPage />
        </Route>
        <Route path='/contacto'>
          <ContactPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
