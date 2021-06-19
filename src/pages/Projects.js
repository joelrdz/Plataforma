import Project from '../components/Project';
import projects from '../assets/projects-data';

export default function ProjectsPage() {
  return (
    <>
      <h1 className="page-title">Proyectos</h1>
      <div className="projects-list">
        {projects.map(project => {
          if (project.show) {
            return (
              <Project project={project} key={project.slug} />
            );
          }
          return null;
        })}
      </div>
    </>
  );
}