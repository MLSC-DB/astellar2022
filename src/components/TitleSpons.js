import React from "react";
import titlespons from "../Assets/titlespons.png";
const TitleSpons = () => {
  return (
    <div className="titleSpons">
      <a href="https://www.linkedin.com/company/internship-training/" target={"blank"} rel="noopener noreferrer">
        <img src={titlespons} alt="sponsorBanner"></img>
      </a>
    </div>
  );
};

export default TitleSpons;
