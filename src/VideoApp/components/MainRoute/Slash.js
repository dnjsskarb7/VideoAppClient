import React from "react";
import BodyLeft from "../BodyLeft";
import BodyRight from "../BodyRight";
const Slash = (props) => {
  return (
    <div className="app-flex app-flex-nowrap app-relative app-full-height app-overflow-hidden">
      <div className="side-nav app-flex-shrink-0 app-full-height app-z-above">
        <BodyLeft />
      </div>
      <BodyRight />
    </div>
  );
};

export default Slash;
