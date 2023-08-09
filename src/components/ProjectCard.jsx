import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const ProjectCard = ({ title, type, desc, country, risk }) => {
  const header = (
    <img
      alt="Card"
      src="https://primefaces.org/cdn/primereact/images/usercard.png"
    />
  );
  const footer = (
    <div className="flex flex-row justify-between items-center px-4">
      <a href="">
        <button>Read more</button>
      </a>
      <a href="">
        <button>Invest</button>
      </a>
    </div>
  );
  return (
    <Card
      footer={footer}
      header={header}
      className=" bg-gray100 w-[350px] sm:[300px] md:w-[250px] lg:w-[300px] mx-2"
      style={{ borderRadius: "12px" }}
    >
      <div className="p-4">
        <h1>{title}</h1>
        <h1>{type}</h1>

        <p className="m-0">{desc}</p>
        <br />
        <p>
          {country} - {risk}
        </p>
      </div>
    </Card>
  );
};

export default ProjectCard;
