import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Chip } from 'primereact/chip';


const ProjectCard = ({ title, type, desc, country, risk,img }) => {
  const header = (
    <img
      alt="Card"
      src={img}
      className="rounded-t-[12px]"
    />
  );
  const footer = (
    <div className="flex flex-row justify-between items-center px-6 mb-4 mt-4">
      <a href="/project">
        <button className="text-[20px] text-violet600 font-semibold">Read more</button>
      </a>
      <a href="">
        <button className="text-[20px] text-violet600 font-semibold">Invest</button>
      </a>
    </div>
  );
  return (
    <Card
      footer={footer}
      header={header}
      className=" bg-gray100 w-[350px] sm:[300px] md:w-[250px] lg:w-[350px] mx-2"
      style={{ borderRadius: "12px" }}
    >
      <div className="p-4">
        <h1 className="text-[24px] text-gray600">{title}</h1>
        <h1 className="text-[16px] text-gray400 mb-4">{type}</h1>

        <p className=" m-0 text-[16px] text-gray500 h-[100px]">{desc}</p>
        <br />
        <div className="flex flex-row items-center justify-start">
          <Chip label={country} className="mr-2 px-4 py-2 bg-violet200 rounded-[20px] text-gray500" />
          {risk === "Bajo" && <Chip label={risk} icon="pi pi-apple" className="mr-2 px-4 py-2 bg-violet200 rounded-[20px] text-gray500" />}
          {risk === "Moderado" && <Chip label={risk} icon="pi pi-apple" className="mr-2 px-4 py-2 bg-violet200 rounded-[20px] text-gray500" />}
          {risk === "Alto" && <Chip label={risk} icon="pi pi-apple" className="mr-2 px-4 py-2 bg-violet200 rounded-[20px] text-gray500" />}

        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;