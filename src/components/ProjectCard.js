import React from "react";
import "../styles/global.css";
import { Icon } from "./Buttons";

export const ProjectCard = ({ title, img, description, links }) => {
  const { web, github } = links;
  return (
    <>
      <img
        className="img-project"
        src={img}
        loading="lazy"
        alt={`${title} project`}
      />
      <div className="flex-column items-center p-10">
        <h3>{title}</h3>
        <p className="py-20">{description}</p>
        <div className="flex-row items-center gap-10">
          <Icon icon="chain" link={web} width={40} />
          <Icon icon="github" link={github} width={40} />
        </div>
      </div>
    </>
  );
};
