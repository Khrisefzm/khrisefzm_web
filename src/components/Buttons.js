import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";

export const Icon = ({ icon, link }) => {
  const IconLoader = lazy(() => import(`./icons/${icon}`));

  return (
    <Suspense fallback={<div>icone button</div>}>
      <Link
        to={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{ width: "40px", display: "block" }}
      >
        <IconLoader />
      </Link>
    </Suspense>
  );
};
