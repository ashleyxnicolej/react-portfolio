
import Project from "../components/Project";

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <Project
        title="Project 1"
        image="project1.jpg"
        deployedLink="https://live-project1.com"
        githubLink="https://github.com/ashleyxnicolej"
      />
      {/* Add 5 more projects like above */}
    </section>
  );
}

export default Portfolio;
