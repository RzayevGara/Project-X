import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Skeleton from "../../skeleton/phone/Skeleton"



const ProductSwipe = React.memo((props) =>{
  return (
    <div className="product-swipe">
      <div className="product-swipe_title">
        <h3>{props.title}</h3>
        <p className='look-all-btn'>Hamısına bax 
        <FontAwesomeIcon icon={faAngleRight}/> 
        </p>
      </div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={40}
        className="swiper-list"
        >
        {props.dataLoading && 
        Array(7)
          .fill()
          .map((item, index) =>(
            <SwiperSlide key={index}>
              <Skeleton/>
            </SwiperSlide>
          ))
        }

         { !props.dataLoading &&
         props.BackData.map((item, index)=>(
          <SwiperSlide key={index}>
            <img src={item.image.url} alt="logo"/>
            <h4>{item.name}</h4>
            <p className="product-price"><span>{item.price.formatted_with_symbol}</span></p>
          </SwiperSlide>
         )
        )}
      </Swiper>
    </div>
  )
})

export default ProductSwipe