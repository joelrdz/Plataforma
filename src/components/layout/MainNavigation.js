import { Link } from 'react-router-dom';

export default function MainNavigation() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Proyectos</Link>
          </li>
          <li>
            <Link to='/servicios'>Plataforma</Link>
          </li>
          <li>
            <Link to='/contacto'>Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}