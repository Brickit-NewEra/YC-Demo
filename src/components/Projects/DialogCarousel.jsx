import React from 'react'
import { Dialog } from 'primereact/dialog';
import { Carousel } from 'primereact/carousel';


const DialogCarousel = ({ visible, setVisible, data }) => {
    return (
        <Dialog header={`Ver ${data.imagenes.length} fotos`} visible={visible} style={{ width: '80vw', height: '80vw', fontFamily: "Gelion" }} onHide={() => setVisible(false)}>
            <div className='w-full h-full flex'>
                <Carousel
                    value={data.imagenes}
                    autoplayInterval={5000}
                    circular={true}

                    itemTemplate={(item) => (
                        <div className='flex w-full'>
                            <img src={item} alt="" className='2xl:h-[34vw] xl:h-[20vw] w-full object-cover rounded-[12px]' />
                            {/* <p className="bg-violet500 text-white px-4 py-2 rounded-[20px] absolute bottom-[10px] ml-4">
                            {currentImageIndex + 1}/{data.imagenes.length}
                        </p> */}
                        </div>
                    )}
                />
            </div>

        </Dialog>
    )
}

export default DialogCarousel