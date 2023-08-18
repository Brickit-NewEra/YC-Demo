import React from 'react'

const RealState = () => {
  return (
    <div className='w-screen min-h-screen flex flex-col items-center justify-start pt-8'>
        <h1 className='text-gray600 text-[50px]'>Ahora en Real Estate.</h1>
        <h1 className='text-gray400 text-[22px] lg:w-[50%] text-center'>En Brickbitz te ofrecemos la posibilidad de invertir tu capital en múltiples proyectos inmobiliarios a partir de la tokenizacion.</h1>
        <div className='flex flex-row justify-between w-[90%] h-[600px] mt-6'>
            <div className='flex flex-col justify-between w-[35%] h-[100%]'>
                <div className='w-full h-[48%] bg-[#000000] flex flex-col justify-end py-4 rounded-[12px] mi-div'>
                    <h1 className='text-[16px] text-gray300 text-left px-4'>Comiciones de solo 1%</h1>
                    <h1 className='text-[40px] text-gray100 text-left px-4'>Empeza con tan solo 10usd</h1>
                </div>
                <div className='w-full h-[48%] mi-degradado flex flex-col justify-center rounded-[12px]'>
                    <h1 className='text-[28px] text-gray200 text-left px-4'>Nuestra meta</h1>
                    <h1 className='text-[36px] text-gray100 text-left px-4'>Hacer accesibles las  inversiones de RealEstate</h1>
                </div>
            </div>
            <div className='flex flex-col w-[62%] h-[100%] bg-[#E8EAEE] flex flex-col px-8 justify-center rounded-[12px]'>
                <h1 className='text-gray700 text-[50px]'>Descubri.</h1>
                <h1 className='text-gray700 text-[50px]'>Diversifica.</h1>
                <h1 className='text-gray700 text-[50px]'>Obtene ganancias.</h1>
                <h1 className='text-gray400 text-[28px] w-[60%]'>Regístrate y comenza a invertir en proyectos de construccion en pozo, loteo o complejos de departamentos</h1>
            </div>
        </div>
    </div>
  )
}

export default RealState