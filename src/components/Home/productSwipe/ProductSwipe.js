import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "../../skeleton/phone/Skeleton";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setID } from "../../../Reducer/ProductInsideIDReducer";

const ProductSwipe = React.memo((props) => {
  const dispatch = useDispatch();
  // let arrayList = useSelector((state) => state.setProductID.productID);
  // console.log(arrayList);

  return (
    <div className="product-swipe">
      <div className="product-swipe_title">
        <h3>{props.title}</h3>
        <p className="look-all-btn">
          Hamısına bax
          <FontAwesomeIcon icon={faAngleRight} />
        </p>
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
            <SwiperSlide
              onClick={() => {
                dispatch(setID(item.id));
              }}
              key={index}
            >
              <Link to={`/telefonlar/${item.id}`}>
                <img src={item.image.url} alt="logo" />
              </Link>
              <h4>{item.name}</h4>
              <p className="product-price">
                <span>{item.price.formatted_with_symbol}</span>
              </p>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
});

export default ProductSwipe;
