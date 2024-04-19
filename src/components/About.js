import React from "react";
import "../styles/global.css";
import { Icon } from "./Buttons";

export const About = () => {
  const skillIcon = {
    width: 60,
    height: 60,
  };
  return (
    <div className="container py-20">
      <h2>About me</h2>
      <img
        className="img-profile py-20"
        src="https://avatars.githubusercontent.com/u/129009072?s=400&u=03125cc60dd30d3e5dfb979266798fb957f2ad93&v=4"
        alt="profile"
        loading="lazy"
      />
      <p style={{ textAlign: "center" }}>
        I am a Full Stack developer who seeks to provide appropriate solution to
        meet the comprehensive technological needs of projects, ensuring a
        seamless user experience and efficient operation across all layers of
        the application.
      </p>
      <h3 className="py-20">My skills are:</h3>
      <div className="flex-row wrap gap-10 items-center py-20">
        <Icon icon="html" width={skillIcon.width} height={skillIcon.height} />
        <Icon icon="css" width={skillIcon.width} height={skillIcon.height} />
        <Icon
          icon="javascript"
          width={skillIcon.width}
          height={skillIcon.height}
        />
        <Icon icon="git" width={skillIcon.width} height={skillIcon.height} />
        <Icon icon="react" width={skillIcon.width} height={skillIcon.height} />
        <Icon
          icon="bootstrap"
          width={skillIcon.width}
          height={skillIcon.height}
        />
        <Icon icon="python" width={skillIcon.width} height={skillIcon.height} />
        <Icon icon="mysql" width={skillIcon.width} height={skillIcon.height} />
        <Icon icon="nodejs" width={skillIcon.width} height={skillIcon.height} />
        <Icon icon="java" width={skillIcon.width} height={skillIcon.height} />
        <Icon icon="flask" width={skillIcon.width} height={skillIcon.height} />
        <Icon
          icon="wordpress"
          width={skillIcon.width}
          height={skillIcon.height}
        />
        <Icon icon="figma" width={skillIcon.width} height={skillIcon.height} />
      </div>
    </div>
  );
};
