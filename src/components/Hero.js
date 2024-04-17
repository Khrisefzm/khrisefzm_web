import React from "react";
import { CatAnimation } from "./CatAnimation";
import { Button, Icon } from "./Buttons";
import "../styles/global.css";

export const Hero = () => {
  return (
    <div className="pt-63 full-screen ">
      <div
        className="flex-column items-center"
        style={{
          height: "calc(100vh - 63px - 130px)",
          backgroundColor: "var(--full-screen)",
        }}
      >
        <p>Hi! I am</p>
        <h1 className="py-20">
          Khrise
          <span className="block" style={{ paddingTop: "20px" }}>
            Franchesca
          </span>
        </h1>
        <h2 className="text-typo">a Full Stack developer</h2>
        <Button text="SEE MY PROJECTS" link="/#projects" />
        <div className="flex-row gap-10 items-center">
          <Icon icon="github" link="https://github.com/Khrisefzm" />
          <Icon icon="linkedin" link="https://www.linkedin.com/in/khrisefzm/" />
        </div>
      </div>
      <CatAnimation />
    </div>
  );
};
