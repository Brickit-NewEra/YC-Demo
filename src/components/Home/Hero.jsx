import React, { useEffect, useRef } from 'react'
import ImgEffect from './ImgEffect'
import group6 from '../../image/group6.png'

const Hero = () => {


    return (
        <>
            <div className="w-screen h-screen hidden lg:flex lg:flex-row items-center justify-center">
                <div className="w-full h-full flex flex-col  items-center justify-center">
                    <div className=" h-screen w-full items-center justify-center flex flex-col">
                        <h1

                            className="font-['Gelion'] text-[50px] w-[450px] text-left text-violet500 leading-tight space-y-2"
                        >
                            La plataforma <br />de inversiones<br />
                            <span className="text-gray500">que revoluciona el mercado</span>
                        </h1>
                        <h1

                            className="text-[24px] w-[450px] text-left text-gray400 "
                        >
                            Invierte tu dinero de forma inteligente en propiedades
                            inmobiliarias.
                        </h1>
                        <div

                            className="flex flex-row w-[450px] mt-6 items-center justify-between "
                        >
                            <button className="bg-violet500 text-white rounded-[30px] py-2 w-[48%] font-['Gelion'] text-[20px]">
                                Como funciona
                            </button>
                            <button className="bg-white text-violet500 border-[2px] border-violet-300 rounded-[30px] py-2 w-[48%] font-['Gelion'] text-[20px]">
                                Comienza ahora
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] h-[100%] flex items-center justify-center ">
                    <ImgEffect />
                </div>
            </div>
            <div className="w-screen min-h-screen flex flex-col items-center justify-center lg:hidden pt-[80px] overflow-hidden">
                <h1

                    className="font-['Gelion'] text-[40px] w-[450px] text-center text-violet500 leading-tight space-y-2"
                >
                    La plataforma <br />de inversiones<br />
                    <span className="text-gray500">que revoluciona el mercado</span>
                </h1>
                <h1

                    className="text-[24px] w-[450px] text-center text-gray-400 px-8 sm:px-0"
                >
                    Invierte tu dinero de forma inteligente en propiedades
                    inmobiliarias tokenizadas.
                </h1>
                <div className="flex flex-col sm:w-[40%] w-[80%]  mt-6 items-center justify-between "
                >
                    <button className="bg-violet500 text-white rounded-[30px] py-2 w-[100%] font-['Gelion'] text-[20px] mb-2">
                        Como funciona
                    </button>
                    <button className="bg-white text-violet500 border-[2px] py-2 border-violet-300 rounded-[30px]  w-[100%] font-['Gelion'] text-[20px]">
                        Comienza ahora
                    </button>
                </div>
            </div>
        </>

    )
}

export default Hero