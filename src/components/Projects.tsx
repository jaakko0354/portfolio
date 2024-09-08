import "../styles/Projects.scss";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      <div className="projects">
        <div className="project">
          <div className="project-title">
            <h2>Personal portfolio</h2>
          </div>
          <div className="project-description">
            <p>
              This website is built with React and TypeScript. The website is
              hosted on GitHub Pages and the source code can be found on my
              GitHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
