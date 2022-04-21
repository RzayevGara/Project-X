import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import AppleLogo from "../../../assets/images/apple.png"

import "swiper/css"
import "swiper/css/pagination";

import { Pagination } from "swiper";



function Carousel() {
  const pagination = {
    clickable: true,
  };
  return (
    <div className="back-img">
      <Swiper  className="swiper-header" pagination={pagination} modules={[Pagination]} spaceBetween={80} loop={true}>
        <SwiperSlide>
          <div>
            <p className='carousel-text-bold'>Buy & Sell
              <br/>
              What's Now & Next
              <br/>
            </p>
            <span className='carousel-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
          </div>
          <img src={AppleLogo} alt="logo"/>
        </SwiperSlide>
        <SwiperSlide >
          <div>
            <p className='carousel-text-bold'>Buy & Sell
              <br/>
              What's Now & Next
              <br/>
            </p>
            <span className='carousel-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
          </div>
          <img src={AppleLogo} alt="logo"/>
        </SwiperSlide>
        <SwiperSlide >
          <div>
            <p className='carousel-text-bold'>Buy & Sell
              <br/>
              What's Now & Next
              <br/>
            </p>
            <span className='carousel-text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
          </div>
          <img src={AppleLogo} alt="logo"/>
        </SwiperSlide>
      </Swiper>
  </div>
  )
}

export default Carousel