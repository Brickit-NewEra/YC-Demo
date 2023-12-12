import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { TabView, TabPanel } from 'primereact/tabview';
import DialogCarousel from './DialogCarousel';


const ProjectDesktop = ({ data }) => {
  const [visible, setVisible] = useState(false);

  const blurEffectStyle = {
    filter: 'blur(1px)', // Aplicar un efecto de desenfoque
    position: 'relative', // Permitir superponer texto
  };

  console.log("aaaaaaa");
  console.log(data.address.name);

  return (
    <div className='hidden lg:flex lg:flex-col items-start justify-start w-[100%] xl:w-[90%] 2xl:w-[85%] px-20'>
      <h1 className='text-left text-[24px] text-gray600'>{data.name}</h1>
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-row items-center justify-center'>
          <Icon icon="twemoji:flag-united-states" className='mr-2' />
          <h1 className='text-left text-[20px] text-gray400'>{data.address.city.state.country.name}, {data.address.name},{data.address.city.name} {data.address.city.state.name}</h1>
        </div>
        <div className='flex flex-rotw items-center justify-center'>
          <button className='custom-underline flex flex-row items-center justify-center text-gray500 mr-4'><Icon icon="mi:edit" className='mr-[3px]' />Editar</button>
          <button className='custom-underline flex flex-row items-center justify-center text-gray500'><Icon icon="zondicons:pause-outline" className='mr-[3px]' />Suspender</button>
        </div>
      </div>
      <div className='w-full mt-4 flex flex-row items-center justify-between h-[360px]'>
        <img src={data.imagenes[0]} alt="" className='h-full w-[33%] rounded-tl-[12px] rounded-bl-[12px] object-cover' />
        <img src={data.imagenes[1]} alt="" className='h-full w-[33%]  object-cover' />
        <div className='flex flex-col items-center justify-between w-[33%] h-full'>
          <img src={data.imagenes[2]} alt="" className='h-[31%]  w-full rounded-tr-[12px]  object-cover' />
          <img src={data.imagenes[3]} alt="" className='h-[31%]  w-full  object-cover' />
          <div className='flex w-full h-[31%] cursor-pointer' style={{ position: "relative" }} onClick={() => { setVisible(!visible) }}>
            <img src={data.imagenes[4]} alt="" className='h-full w-full rounded-br-[12px] object-cover customimg' style={blurEffectStyle} />
            <h1 className='absolute top-[35%] left-[45%] text-[26px] text-gray500'>+{data.imagenes.length} fotos</h1>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-row items-start justify-between mt-4 pb-8'>
        <div className='flex flex-col items-start justify-start w-[64%]'>
          <h1 className='text-left text-[20px] text-gray600'>{data.type}</h1>
          <h1 className='text-left text-[16px] text-gray400 mb-4'>{data.short_text}</h1>
          <TabView style={{ fontFamily: "Gelion" }}>
            <TabPanel header="Descripcion">
              <p className="m-0 text-gray500 text-justify">
                {data.description}
              </p>
            </TabPanel>
            <TabPanel header="Actividad">
              <p className="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
              </p>
            </TabPanel>
            <TabPanel header="Documentación">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
              </p>
            </TabPanel>
            <TabPanel header="Ubicación">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in
                culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
              </p>
            </TabPanel>
          </TabView>
        </div>
        <div className='w-[33%] flex'>
          <div className=' flex flex-col border-[1px] border-gray200 w-[100%] py-6 px-6 rounded-[12px]'>
            <div className='flex flex-col items-start justify-start border-gray200 border-[1px] rounded-[12px]'>
              <div className='flex flex-row  justify-between items-center w-full px-4 py-2'>
                <h1 className='text-[32px] text-gray600 font-bold'>TTKN</h1>
                <h1 className='text-[18px] text-gray500'>${Math.floor(data.total_value/data.possible_quantity_token)} USD <span className='text-gray300 text[14px]'>/token</span></h1>
              </div>
              <div className='w-full bg-gray200 h-[1px] mb-4'></div>
              <div className='flex flex-row  justify-between items-center w-full px-4 py-2 '>
                <h1 className='text-[20px] text-gray400 font-bold'>Cantidad de tokens:</h1>
                <h1 className='text-[20px] text-gray600'>{data.possible_quantity_token}</h1>
              </div>
              <div className='flex flex-row  justify-between items-center w-full px-4 py-2 '>
                <h1 className='text-[20px] text-gray400 font-bold'>Valuación:</h1>
                <h1 className='text-[20px] text-[#0FB186]'>${data.total_value} USD</h1>
              </div>
            </div>
            <h1 className='text-[18px] text-gray400 mt-4 text-justify'>{data.short_text}</h1>
            <button className='mt-8 rounded-[6px] bg-violet500 text-[20px] text-white py-2 w-full'>Invertir</button>
          </div>
        </div>
      </div>
      <DialogCarousel visible={visible} setVisible={setVisible} data={data} />
    </div>
  )
}

export default ProjectDesktop