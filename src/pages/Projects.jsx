import React from "react";
import Card from "../components/ProjectCard";
import project1 from '../image/project1.png';
import project2 from '../image/project2.png';
import project3 from '../image/project3.png';

const Projects = () => {
  const projects = [
    {
      titulo: "Residencial Los Pinos",
      tipoProyecto: "Desarrollo de viviendas",
      descripcion:
        "Un proyecto residencial de lujo con casas unifamiliares rodeadas de áreas verdes y comodidades modernas.",
      pais: "Uruguay",
      riesgo: "Moderado",
      img:project1
    },
    {
      titulo: "Torres del Horizonte",
      tipoProyecto: "Construcción de apartamentos",
      descripcion:
        "Un conjunto de torres de apartamentos con vista panorámica a la ciudad y amplias zonas recreativas.",
      pais: "México",
      riesgo: "Bajo",
      img:project2
    },
    {
      titulo: "Centro Comercial",
      tipoProyecto: "Desarrollo comercial",
      descripcion:
        "Un moderno centro comercial con tiendas de renombre, cines y restaurantes.",
      pais: "España",
      riesgo: "Alto",
      img:project3
    },
  ];

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-start pt-[100px]">
        <h1 className="mb-8 text-[40px]">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-[90%] sm:w-full">
        {projects.map((pr, index) => {
          return (
            <Card
              key={index}
              title={pr.titulo}
              type={pr.tipoProyecto}
              desc={pr.descripcion}
              country={pr.pais}
              risk={pr.riesgo}
              img={pr.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
