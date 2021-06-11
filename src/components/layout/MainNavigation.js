import { Link } from 'react-router-dom';

export default function MainNavigation(props) {

  function closeSidebarHandler() {
    props.onSidebarClose();
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/' onClick={closeSidebarHandler}>Proyectos</Link>
          </li>
          <li>
            <Link to='/servicios' onClick={closeSidebarHandler}>Plataforma</Link>
          </li>
          <li>
            <Link to='/contacto' onClick={closeSidebarHandler}>Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}