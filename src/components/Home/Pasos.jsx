import React from 'react'
import building from '../../image/building3.png'
const Pasos = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col items-center justify-start pt-[100px] px-20'>
        <div className='flex flex-row items-center justify-between w-[100%] h-[280px]'>
            <div className='flex items-center bg-black h-full w-[20%] rounded-[20px] px-6 mr-6'>
                <h1 className='text-violet100 text-[50px]'>Cómo <br /> empezar</h1>
            </div>
            <div className='flex flex-col justify-center items-start bg-[#DAE1EF] h-full w-[24%] rounded-[20px] px-6'>
                <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] bg-gray500 mb-4'>
                    <h1 className='text-gray100 text-[24px]'>1</h1>
                </div>
                <h1 className='text-left text-gray500 text-[30px]'>Registro</h1>
                <h1 className='text-left text-gray400 text-[24px]'>Inscripción sencilla en pocos pasos. </h1>
            </div>
            <div className='flex flex-col justify-center items-start bg-[#DAE1EF] h-full w-[24%] rounded-[20px] px-6'>
                <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] bg-gray500 mb-4'>
                    <h1 className='text-gray100 text-[24px]'>2</h1>
                </div>
                <h1 className='text-left text-gray500 text-[30px]'>Verificación</h1>
                <h1 className='text-left text-gray400 text-[24px]'>Inscripción sencilla en pocos pasos.  </h1>
            </div>
            <div className='flex flex-col justify-center items-start bg-[#DAE1EF] h-full w-[24%] rounded-[20px] px-6'>
                <div className='flex items-center justify-center rounded-full w-[40px] h-[40px] bg-gray500 mb-4'>
                    <h1 className='text-gray100 text-[24px]'>3</h1>
                </div>
                <h1 className='text-left text-gray500 text-[30px]'>Invertí</h1>
                <h1 className='text-left text-gray400 text-[24px]'>Arma tu cartera de inversiones con  10usd</h1>
            </div>
        </div>
        <div className='flex flex-row items-center justify-between w-[100%] h-[400px] mt-6'>
            <div className='w-[55%] h-full bg-[#DAE1EF] rounded-[20px] flex flex-col justify-center px-6'>
                <h1 className='text-left text-gray500 text-[34px] w-[60%] mb-2'>Hace crecer tu capital invirtiendo con nosotros</h1>
                <h1 className='text-left text-gray400 text-[26px] w-[90%]'>Descubrí nuevas oportunidades de ingresos mediante la renta de propiedades y su potencial revalorización a largo plazo.</h1>
            </div>
            <div className='w-[42%] h-full bg-black rounded-[20px]  flex flex-col justify-center items-center'>
                <img src={building} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Pasos