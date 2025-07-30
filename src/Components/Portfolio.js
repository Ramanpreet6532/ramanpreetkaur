import React, { useState } from "react";

const Portfolio = ({ data }) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const handleToggle = (title) => {
    // Toggle: close if same project, open if different
    setExpandedProject((prev) => (prev === title ? null : title));
  };

  if (!data) return null;
if (data) {
  var projects = data.projects.map((project) => {
    const projectImage = "images/portfolio/" + project.image;
    const isOpen = expandedProject === project.title;

    return (
      <div key={project.title} className="columns portfolio-item">
        <div className="item-wrap" style={{ cursor: "pointer" }} onClick={() => handleToggle(project.title)}>
          <img alt={project.title} src={projectImage} />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>{project.title}</h5>
              {/* <p>{project.category}</p> */}
            </div>
          </div>
        </div>

        {/* Conditionally render project details below */}
        {isOpen && (
          <div className="project-description" style={{ padding: "1rem", background: "#f9f9f9", marginTop: "0.5rem" }}>
            <p><strong>Description:</strong> {project.description}</p>
            <p><strong>Skills:</strong></p>
            <ul>
              {project.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  });
}
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
