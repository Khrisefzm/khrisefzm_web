import React, { Suspense, lazy } from "react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "../styles/global.css";

export const Icon = ({ icon, link }) => {
  const IconLoader = lazy(() => import(`./icons/${icon}`));

  return (
    <Suspense fallback={<div>icone button</div>}>
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "block" }}
      >
        <IconLoader />
      </Link>
    </Suspense>
  );
};

export const Button = ({ text, link }) => {
  return (
    <HashLink smooth exact to={link}>
      <button className="btn text-typo">{text}</button>
    </HashLink>
  );
};
