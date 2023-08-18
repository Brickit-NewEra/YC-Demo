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
    {
      titulo: "Complejo Residencial",
      tipoProyecto: "Resort frente al mar",
      descripcion:
        "Un resort de lujo ubicado en primera línea de playa, con villas privadas, piscinas y acceso exclusivo al mar.",
      pais: "Brasil",
      riesgo: "Moderado",
      img:project1
    },
    {
      titulo: "Oficinas  SkyTower",
      tipoProyecto: "Desarrollo de oficinas",
      descripcion:
        "Un rascacielos de oficinas de última generación con tecnología avanzada y espacios flexibles para empresas.",
      pais: "Canadá",
      riesgo: "Moderado",
      img:project2
    },
    {
      titulo: "Proyecto VerdeVida",
      tipoProyecto: "Comunidad sostenible",
      descripcion:
        "Una comunidad residencial ecológica con casas energéticamente eficientes y áreas de conservación.",
      pais: "Costa Rica",
      riesgo: "Bajo",
      img:project3
    },
    {
      titulo: "Complejo SportMax",
      tipoProyecto: "Instalaciones deportivas",
      descripcion:
        "Un centro deportivo de primer nivel con canchas de tenis y espacios para entrenamiento.",
      pais: "Argentina",
      riesgo: "Moderado",
      img:project1
    },
    {
      titulo: "Residencias BellaVista",
      tipoProyecto: "Urbanización residencial",
      descripcion:
        "Una urbanización cerrada con casas contemporáneas, áreas recreativas y seguridad 24/7.",
      pais: "Colombia",
      riesgo: "Bajo",
      img:project2
    },
    {
      titulo: "Torre Financiera CityScape",
      tipoProyecto: "Edificio de oficinas",
      descripcion:
        "Una torre de oficinas de alto nivel en el corazón financiero de la ciudad, con espacios premium .",
      pais: "Chile",
      riesgo: "Alto",
      img:project3
    },
    {
      titulo: "Resort Montaña Dorada",
      tipoProyecto: "Destino turístico",
      descripcion:
        "Un resort de montaña con cabañas acogedoras, actividades al aire libre y vistas panorámicas de la naturaleza.",
      pais: "Perú",
      riesgo: "Moderado",
      img:project1
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
