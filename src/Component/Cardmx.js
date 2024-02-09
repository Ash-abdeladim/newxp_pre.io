import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import circle from "blob.svg"
import ash from "ashh_r.png"
import hexa from "hexa_r.png"
import aym from "aym_r.png"
import linkdin from "linkedin.svg"
import github from "github.svg"
import { Link } from "react-router-dom"




export default function Cardmx() {
  return (
    <div className='Cardmx'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="Cardmx_swp"
      >
        <SwiperSlide>
          <div className="mxcard">
            <div className="mg_container">
              <img src={circle} alt="cir" className="mx_cirle" />
              <img className='mx_pic' src={ash} alt="" />
            </div>
            <div className='data_fd'>
              <h3>Achraf Abdeladim</h3>
              <h5>CTO-FOUNDER</h5>
            </div>
            <div>
              <p>
                my mission at Xphenix is ​​to create a website where we can sell our products
                <br />
                Xphenix to me is more than just a online branding for me is a future that we must build it togheter
              </p>
            </div>
            <div className="sc"><Link to="https://www.linkedin.com/in/achraf-abdeladim-68b764235/"><img src={linkdin} alt="link" /></Link><Link to="https://github.com/Ash-abdeladim"><img src={github} alt="git" /></Link></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mxcard">
            <div className="mg_container">
              <img src={circle} alt="cir" className="mx_cirle" />
              <img className='mx_pic' src={aym} alt="" />
            </div>
            <div className='data_fd'>
              <h3>Ayman Ouzali</h3>
              <h5>COO-FOUNDER</h5>
            </div>
            <div>
              <p>
                my mission at Xphenix is ​​to create a website where we can sell our products
                <br />
                Xphenix to me is more than just a online branding for me is a future that we must build it togheter
              </p>
            </div>
            <div className="sc"><Link to="https://www.linkedin.com/in/ayman-ouzali-9b00201a1/"><img src={linkdin} alt="link" /></Link></div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mxcard">
            <div className="mg_container">
              <img src={circle} alt="cir" className="mx_cirle" />
              <img className='mx_pic' src={hexa} alt="" />
            </div>
            <div className='data_fd'>
              <h3>Haitam abdeladim</h3>
              <h5>CEO-FOUNDER</h5>
            </div>
            <div>
              <p>
                my mission at Xphenix is ​​to create a website where we can sell our products
                <br />
                Xphenix to me is more than just a online branding for me is a future that we must build it togheter
              </p>
            </div>
            <div className="sc"><Link><img src={linkdin} alt="link" /></Link></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
