import React from 'react'
import { Icon } from "@iconify/react";
import { Navigate, useNavigate } from "react-router-dom";

const clientes = [
    { titulo: "Projects", direccion: "/" },
    { titulo: "Tokens", direccion: "/" },
    { titulo: "Dashboard", direccion: "/" },
    { titulo: "Education", direccion: "/" },
  ];

const NavDesktop = ({logo,user,setUser}) => {
    let navigate = useNavigate();
  return (
    <>
    <div className="fixed hidden w-screen bg-transparent xl:flex xl:flex-row justify-between items-center px-20 py-4 z-40">
      <img src={logo} alt="" className="h-[50px] cursor-pointer" onClick={()=>{navigate("/")}}/>
      {!user.activo && (
        <div className="flex flex-row items-center">
          <button
            className="cursor-pointer text-white bg-violet500 border-[2px] rounded-[10px] border-violet500 font-regular font-medium font- text-[20px] px-8 py-[5px] "
            onClick={() => {
              navigate("/login");
            }}
          >
            Ingresar
          </button>
          <button
            className="cursor-pointer text-violet500 bg-transparent border-[2px] rounded-[10px] border-violet500 font-regular font-medium font- text-[20px] px-4 py-[5px] ml-4"
            onClick={() => {
              navigate("/registro");
            }}
          >
            Registrarme
          </button>
        </div>
      )}
      {user.activo && (
        <div className="flex flex-row items-center">
          {clientes.map((dir, index) => {
            return (
              <a className="font-regular font-semibold text-[16px] text-gray400 hover:text-gray500 cursor-pointer ml-16" onClick={()=>{navigate(dir.direccion)}}>
                {dir.titulo}
              </a>
            );
          })}
          <button className="cursor-pointer text-violet500 bg-transparent border-[2px] rounded-[10px] border-violet500 font-regular font-bold font- text-[18px] px-2 py-[5px] ml-20" onClick={()=>{navigate("")}}>
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  </>
  )
}

export default NavDesktop