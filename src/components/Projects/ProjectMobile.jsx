import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Carousel } from 'primereact/carousel';


const ProjectMobile = ({ data }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handleImageChange = (event) => {
        setCurrentImageIndex(event.page);
    };
    return (
        <div className='flex flex-col items-center justify-start lg:hidden w-full pb-[200px]'>
            <Carousel
                showNavigators={false}
                showIndicators={false}
                value={data.imagenes}
                onPageChange={handleImageChange}
                autoplayInterval={5000}
                circular={true}
                itemTemplate={(item) => (
                    <div className='flex w-full'>
                        <img src={item} alt="" className='w-[100%] h-[250px] object-cover' />
                        {/* <p className="bg-violet500 text-white px-4 py-2 rounded-[20px] absolute bottom-[10px] ml-4">
                            {currentImageIndex + 1}/{data.imagenes.length}
                        </p> */}
                    </div>
                )}
            />
            <div className='px-4 flex flex-col items-start justify-start w-full mt-4'>
                <h1 className='text-left text-[20px] text-gray600'>{data.name}</h1>
                <div className='flex flex-row items-center justify-center'>
                    <Icon icon="twemoji:flag-united-states" className='mr-2' />
                    <h1 className='text-left text-[16px] text-gray400'>{data.address.city.state.country.name}, {data.address.name},{data.address.city.name} {data.address.city.state.name}</h1>
                </div>
                <div className='flex flex-rotw items-center justify-center mt-4'>
                    <button className='custom-underline flex flex-row items-center justify-center text-gray500 mr-4'><Icon icon="mi:edit" className='mr-[3px]' />Editar</button>
                    <button className='custom-underline flex flex-row items-center justify-center text-gray500'><Icon icon="zondicons:pause-outline" className='mr-[3px]' />Suspender</button>
                </div>
                <div className='bg-gray200 w-full h-[1px] rounded-[12px] mt-4 mb-4'></div>
                <h1 className='text-left text-[20px] text-gray600'>{data.type}</h1>
                <h1 className='text-left text-[16px] text-gray400 mb-4'>{data.short_text}</h1>
                <div className='sm:flex hidden'>
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
                <div className='flex flex-col items-start justify-start sm:hidden'>
                    <h1 className='text-left text-gray600 text-[20px]'>Descripcion</h1>
                    <h1 className='text-left text-gray500 mb-4 text-justify'>{data.description}</h1>
                    <h1 className='text-left text-gray600 text-[20px]'>Ubicacion</h1>
                    <h1 className='text-left text-gray500 mb-4 text-justify'>{data.description}</h1>
                    <h1 className='text-left text-gray600 text-[20px]'>Documentacion</h1>
                    <h1 className='text-left text-gray500 mb-4 text-justify'>{data.description}</h1>
                </div>
            </div>
            <div className='fixed bottom-0 w-full flex flex-col items-start justify-start bg-white pb-4 z-20'>
                <div className='bg-gray200 w-full h-[1px] rounded-[12px]  mb-4'></div>
                <div className='flex flex-row items-center justify-between w-full px-4'>
                    <div className='flex flex-col items-start justify-start'>
                        <h1 className='text-[24px] text-gray700 font-bold'>{data.token}TKN</h1>
                        <h1 className='text-[18px] text-gray500'>${Math.floor(data.total_value/data.possible_quantity_token)} USD <span className='text-gray300 text[14px]'>/token</span></h1>
                    </div>
                    <button className='text-white bg-violet500 rounded-[12px] px-6 py-2 text-[20px]'>Invest</button>
                </div>

            </div>
        </div>
    )
}

export default ProjectMobile