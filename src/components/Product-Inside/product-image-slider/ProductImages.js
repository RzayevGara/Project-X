import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper";

function ProductImages() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const product = useSelector((state) => state.setProductDetail.list);
  const assetsID = useSelector((state) => state.AddToCard.assetID);

  return (
    <div className="product-images">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-up"
      >
        {product.assets &&
          product.assets.map((item, index) => {
            if (assetsID) {
              return (
                assetsID.map((itemm)=>{
                  if (itemm === item.id) {
                    return (
                      <SwiperSlide key={index}>
                        <img src={item.url} alt="logo" />
                      </SwiperSlide>
                    );
                  }
                })
              )
            } else {
              return (
                <SwiperSlide key={index}>
                  <img src={item.url} alt="logo" />
                </SwiperSlide>
              );
            }
          })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={false}
        spaceBetween={5}
        slidesPerView={7}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="swiper-down"
      >
        {product.assets &&
          product.assets.map((item, indexx) => {
            if (assetsID) {
              return (
                assetsID.map((itemm)=>{
                  if (itemm === item.id) {
                    return (
                      <SwiperSlide key={indexx}>
                        <img src={item.url} alt="logo" />
                      </SwiperSlide>
                    );
                  }
                })
              )
            } else {
              return (
                <SwiperSlide key={indexx}>
                  <img src={item.url} alt="logo" />
                </SwiperSlide>
              );
            }
          })
          }
      </Swiper>
    </div>
  );
}

export default ProductImages;
