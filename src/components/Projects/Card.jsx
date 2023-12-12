import React from 'react'
import { FlagIcon } from 'react-flag-kit';
import { Navigate, useNavigate } from "react-router-dom";


const Card = ({item}) => {
  let navigate = useNavigate();

  const handleClick = () => {
    console.log(item)
    navigate(`/project-investor/1`)
  }
  return (
    <div className='w-full cursor-pointer' onClick={()=>{handleClick()}}>
        <img src={item.imagen} alt="" className='w-full h-[200px] object-cover rounded-[12px]'/>
        <div className='mt-2 flex flex-row justify-between items-center'>
            <h1 className='text-gray500 text-[24px] truncate-text2'>{item.nombre}</h1>
            <FlagIcon code="AR" size={32} className='mr-4 ' />
        </div>
        <h1 className='text-gray400 text-[20px] '>{item.ubicacion}</h1>
        <h1 className='text-gray400 text-[20px] '>{item.token}</h1>
    </div>
  )
}

export default Card