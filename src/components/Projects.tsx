import "../styles/Projects.css";
import { forwardRef } from "react";

interface ProjectsProps {
  scrollY: number;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(
  ({ scrollY }, ref) => {
    const projectsOpacity = () => {
      const fadeInStart = 350;
      const fadeInEnd = 500;
      const fadeOutStart = 550; // Adjust this value based on when you want the fade-out effect to start
      const fadeOutEnd = 700;
      if (scrollY < fadeInStart) {
        return 0; // Before fade-in range
      } else if (scrollY < fadeInEnd) {
        return (scrollY - fadeInStart) / (fadeInEnd - fadeInStart); // Fade in
      } else if (scrollY < fadeOutStart) {
        return 1; // Fully visible
      } else if (scrollY < fadeOutEnd) {
        return 1 - (scrollY - fadeOutStart) / (fadeOutEnd - fadeOutStart); // Fade out
      } else {
        return 0; // After fade-out range
      }
    };
    const projectsTranslateY = scrollY * 0.7;

    return (
      <div
        className="projects-container"
        style={{
          opacity: projectsOpacity(),
          transform: `translateY(-${projectsTranslateY}px)`,
        }}
        ref={ref}
      >
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
  }
);

export default Projects;
