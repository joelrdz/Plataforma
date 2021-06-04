import { Switch, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import ProjectsPage from './pages/Projects';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
