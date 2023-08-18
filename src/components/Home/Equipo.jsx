import React, { useState } from 'react'
import tomi from '../../image/tomi.png'
import diego from '../../image/diego.png'
import facu from '../../image/facu.png'
import espert from '../../image/espert.png'
import { Dialog } from 'primereact/dialog';
import 'primereact/resources/primereact.css';                       // core css
import 'primeicons/primeicons.css';                                 // icons

const Equipo = () => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className='w-screen min-h-screen flex flex-col items-center justify-start pt-20'>
                <h1 className='text-[40px] text-gray500 mb-6'>Nuesto equipo.</h1>
                <div className='flex flex-row items-center justify-around w-[50%] mb-4'>
                    <div className='flex flex-col items-center bg-gray100 rounded-[12px]  w-[343px] hovershadow' onClick={() => { setVisible(!visible) }}>
                        <h1 className='text-[24px] text-gray500  pt-4 mb-4'>Diego Ballester</h1>
                        <img src={diego} alt="" />
                    </div>
                    <div className='flex flex-col items-center bg-gray100 rounded-[12px]  w-[343px] hovershadow'>
                        <h1 className='text-[24px] text-gray500  pt-4 mb-4'>Facundo Güell</h1>
                        <img src={espert} alt="" />
                    </div>
                </div>
                <div className='flex flex-row items-center justify-around w-[50%]'>
                    <div className='flex flex-col items-center bg-gray100 rounded-[12px]  w-[343px] cursor-pointer hovershadow'>
                        <h1 className='text-[24px] text-gray500  pt-4 mb-4'>Facundo Zalloco</h1>
                        <img src={facu} alt="" />
                    </div>
                    <div className='flex flex-col items-center bg-gray100 rounded-[12px] w-[343px] hovershadow'>
                        <h1 className='text-[24px] text-gray500  pt-4 mb-4'>Tomas Kahn</h1>
                        <img src={tomi} alt="" />
                    </div>
                </div>

            </div>
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)} className='bg-violet500'>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </>
    )
}

export default Equipo