import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "../../skeleton/phone/Skeleton";
import { Link } from "react-router-dom";

const ProductSwipe = React.memo((props) => {
  return (
    <div className="product-swipe">
      <div className="product-swipe_title">
        <h3>{props.title}</h3>
        <Link to={`${props.link}`}>
          <p className="look-all-btn">
            Hamısına bax
            <FontAwesomeIcon icon={faAngleRight} />
          </p>
        </Link>
      </div>
      <Swiper slidesPerView={"auto"} spaceBetween={40} className="swiper-list">
        {props.dataLoading &&
          Array(7)
            .fill()
            .map((item, index) => (
              <SwiperSlide key={index}>
                <Skeleton />
              </SwiperSlide>
            ))}

        {!props.dataLoading &&
          props.BackData.map((item, index) => (
            <SwiperSlide key={index}>
              <Link className="link" to={`${item.name.split(' ')[0].toLowerCase()}/${item.id}`}>
                <img src={item.image.url} alt="logo" />
                <h4>{item.name} {item.variant_groups.length>1 && item.variant_groups[1].options[0].name}</h4>
                <p className="product-price">
                  <span>{item.price.formatted_with_symbol}</span>
                </p>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
});

export default ProductSwipe;
