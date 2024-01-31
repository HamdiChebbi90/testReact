
import './style.css';

import { Swiper, SwiperSlide } from 'swiper/react';

const ImgSlider = ({slides}) => {


    return (
        <div className="slider">
        <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
            "clickable": true
        }} navigation={true} className="mySwiper">
            {slides.map((slide) => 
                (
                    <SwiperSlide key={slide.url}>
                        <img src={slide.url} alt= {slide}/>
                    </SwiperSlide>
                )
            )}
        </Swiper>

        </div>)
}

export default ImgSlider;