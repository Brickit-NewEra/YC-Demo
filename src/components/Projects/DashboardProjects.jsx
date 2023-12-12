import React, { useState,useEffect } from 'react'
import { styles } from '../../styles';
import { InputText } from "primereact/inputtext";
import Select from 'react-select';
import { FlagIcon } from 'react-flag-kit';
import Card from './Card';
import projectimg from '../../image/projectimg.png'
import land1 from '../../image/land1.png'
import land2 from '../../image/land2.png'
import land3 from '../../image/land3.png'
import land4 from '../../image/land4.png'
import land5 from '../../image/land5.png'
import land6 from '../../image/land6.png'
import land7 from '../../image/land7.png'
import land8 from '../../image/land8.png'
import land9 from '../../image/land9.png'
import land10 from '../../image/land10.png'
import land11 from '../../image/land11.png'
import land13 from '../../image/land13.png'
import axios from 'axios'
// import Cookies from 'js-cookie';


const countries = [
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'AR', label: 'Argentina' },
  // Agrega más países según tus necesidades
];

const CustomOption = ({ innerProps, label, value }) => (
  <div className='flex flex-row mb-4 hover:bg-gray100 cursor-pointer py-4 px-4'>
    <FlagIcon code={value} size={32} className='mr-4 ' />
    {label}
  </div>
);



const DashboardProjects = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  // const token = Cookies.get('token');
  const [data, setData] = useState([
    { imagen: projectimg, ubicacion: "Córdoba, Argentina", token: "CRD", nombre: "Torre del Sol" },
    { imagen: land1, ubicacion: "Buenos Aires, Argentina", token: "BUE", nombre: "Complejo Las Acacias" },
    { imagen: land2, ubicacion: "Mendoza, Argentina", token: "MDZ", nombre: "Loteo El Amanecer" },
    { imagen: land3, ubicacion: "Salta, Argentina", token: "SLA", nombre: "Edificio Paseo del Valle" },
    { imagen: land4, ubicacion: "Rosario, Argentina", token: "ROS", nombre: "Torre Centenario" },
    { imagen: land5, ubicacion: "San Juan, Argentina", token: "SJA", nombre: "Complejo Los Pinos" },
    { imagen: land6, ubicacion: "La Plata, Argentina", token: "LPT", nombre: "Loteo La Esperanza" },
    { imagen: land7, ubicacion: "Mar del Plata, Argentina", token: "MDQ", nombre: "Edificio Marítimo" },
    { imagen: land8, ubicacion: "Córdoba, Argentina", token: "CRD", nombre: "Torre del Bosque" },
    { imagen: land9, ubicacion: "San Miguel de Tucumán, Argentina", token: "TUC", nombre: "Complejo Los Alamos" },
    { imagen: land10, ubicacion: "Bariloche, Argentina", token: "BAR", nombre: "Loteo Montaña Azul" },
    { imagen: land11, ubicacion: "Neuquén, Argentina", token: "NEU", nombre: "Edificio Patagonia" },
    { imagen: land13, ubicacion: "Ushuaia, Argentina", token: "USH", nombre: "Complejo Fin del Mundo" },
    { imagen: projectimg, ubicacion: "Villa María, Argentina", token: "VMA", nombre: "Loteo Bella Vista" },
    { imagen: projectimg, ubicacion: "Santa Fe, Argentina", token: "SFE", nombre: "Torre del Río" },
    { imagen: projectimg, ubicacion: "Tandil, Argentina", token: "TDL", nombre: "Complejo Sierras del Este" },
    { imagen: projectimg, ubicacion: "San Carlos de Bariloche, Argentina", token: "BAR", nombre: "Loteo Monte Nevado" }
  ]);

  // useEffect(() => {
  //   axios.get(axios.defaults.baseURL + "projects/client/", {
  //     withCredentials: true,
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Authorization": `Token ${token}`
  //     }
  //   }).then((response) => {
  //     console.log(response.data)
  //   }).catch((error) => {
  //     console.log(error)
  //   });
  // }, [])

  return (
    <div className="w-screen min-h-screen flex flex-col items-start justify-start pt-[100px] px-4 sm:px-6  md:px-8 lg:px-10 xl:px-20">
      <div className='w-full flex flex-row mb-8'>
        <div>
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText placeholder="Busca un proyecto..." className="no-outline-focus" />
          </span>
        </div>
        <Select
          value={selectedOption}
          onChange={(selectedOption) => {
            setSelectedOption(selectedOption);
            console.log(selectedOption);
          }}
          options={countries}
          components={{ Option: CustomOption }}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              height: '50px',
              width: "300px",
              marginLeft: "20px"
            }),
          }}
          placeholder="Select a country"
          className='hidden md:flex'
        />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full'>
        {data.map((item, index) => {
          return (
            <Card item={item}></Card>
          )
        })}
      </div>

    </div>
  )
}

export default DashboardProjects