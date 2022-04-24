import React from "react";
import { useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function ProductOption() {
  const product = useSelector((state) => state.setProductID.list);
  console.log(product);

  return (
    <div className="product-option">
      <h2>{product.name}</h2>
      <Stack spacing={1}>
        <Rating name="size-medium" defaultValue={2} />
      </Stack>
      <p className="price">{product.price && product.price.formatted_with_symbol}</p>
      <div className="colors">
        <p>Rəng:</p>
        {
          product.variant_groups && 
          product.variant_groups[0].options.map((item, index)=>(
            <div key={index} className={item.name.toLowerCase()}></div>
          ))
        }
      </div>
      <div className="size">
        <p>Yaddaş:</p>
        {
          product.variant_groups && 
          product.variant_groups[1].options.map((item, index)=>(
            <div key={index} >{item.name}</div>
          ))
        }
      </div>
    </div>
  );
}

export default ProductOption;
