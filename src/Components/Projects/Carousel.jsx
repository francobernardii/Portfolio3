import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import carouselData from "./config"
import { useState } from "react";


function Carousel() {

    // Falta ver como hacer que cambie el titulo y la url con cada imagen del carousel
    const [title,setTitle] = useState()

    return (
        <div className="max-w-sm">
            <h1 className="w-full flex justify-center mb-10">{title}</h1>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper rounded-xl"
            >
                {
                    carouselData.map((project,index) => {
                        return(
                            <SwiperSlide key={index}>
                                <img
                                    className="object-fill w-full h-96"
                                    src={project.imgURL}
                                    alt={project.title}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className="w-full flex justify-center mt-10">
                <a href="" target="_blank">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Visit Site</button>
                </a>
            </div>
        </div>
    );
}

export default Carousel;