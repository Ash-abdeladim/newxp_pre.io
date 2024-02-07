import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import vision from "vision.jpeg"
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Mousewheel } from 'swiper/modules';
import Maroc from "maroc.jpg"
import meta from "meta.jpeg"
import clts from "clts.jpeg"
// import logo from "logo.png"

export default function Swipper() {
    return (
        <div className='swp_container'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                mousewheel={true}
                // navigation={true}
                modules={[Autoplay, Mousewheel]}
                className="mySwiper"
            >
                <SwiperSlide>
                    {/* <div> */}
                    <img src={Maroc} vision="swipimg" />
                    {/* <h3>Creat a Moroccan Dig-Brand </h3> */}
                    {/* </div> */}
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img src={vision} vision="swipimg" />
                        {/* <h3>Creat a Moroccan Dig-Brand </h3> */}
                    </div>
                </SwiperSlide>
                <SwiperSlide><div><img src={meta} vision="swipimg" /></div></SwiperSlide>
                <SwiperSlide><div><img src={clts} vision="swipimg" /></div></SwiperSlide>
                {/* <SwiperSlide><div><img src={logo} vision="swipimg"/></div></SwiperSlide> */}
            </Swiper>
        </div>
    );
}
