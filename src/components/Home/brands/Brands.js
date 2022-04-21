import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import commerce from "../../../lib/Commerce";
import SkeletonBrands from "../../skeleton/brands/SkeletonBrands"

import "swiper/css"
import "swiper/css/pagination";

import { Pagination } from "swiper";

function Brands() {
  const [product, setProduct] = useState([]);
  const [ProductLoading, setProductLoading] = useState(true);

  const fetchProduct = () => {
    commerce.products
      .list({ category_slug: ["brands-logo"] })
      .then((products) => {
        setProduct(products.data);
        setProductLoading(false)
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const pagination = {
    clickable: true,
  };
  return (
    <div className="brands">
      <Swiper slidesPerView={6} spaceBetween={5} className="brands-list" pagination={pagination} modules={[Pagination]}>
      {ProductLoading && 
        Array(7)
          .fill()
          .map((item, index) =>(
            <SwiperSlide key={index}>
              <SkeletonBrands/>
            </SwiperSlide>
          ))
        }
        {!ProductLoading &&
        product.map((item, index)=>(
            <SwiperSlide key={index}>
                <img src={item.image.url} alt="logo"/>
            </SwiperSlide>
        ))
        }
      </Swiper>
    </div>
  );
}

export default Brands;
