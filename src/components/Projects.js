import React from "react";
import "../styles/global.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const allProjects = [
    {
      title: "StarWars",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTQQdBq6gTHIhMbkQNAT1DFWTPSeHdypBxsl3FRvJ1Q&s",
      description:
        "This project is a Star Wars dictionary with some characters, planets and ",
      links: {
        web: "",
        github: "https://github.com/Khrisefzm/My-web-site",
      },
    },
    {
      title: "StarWars",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTQQdBq6gTHIhMbkQNAT1DFWTPSeHdypBxsl3FRvJ1Q&s",
      description:
        "This project is a Star Wars dictionary with some characters, planets and ",
      links: {
        web: "",
        github: "https://github.com/Khrisefzm/My-web-site",
      },
    },
  ];

  return (
    <div className="container py-20">
      <h2 className="py-20">My projects</h2>
      <div className="projects-container">
        {allProjects.map((project, index) => {
          return (
            <div className="card" key={index}>
              <ProjectCard
                title={project.title}
                img={project.img}
                description={project.description}
                links={project.links}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
