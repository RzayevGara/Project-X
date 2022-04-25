import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {setSize, setColor, setCount, setColorName, setSizeName} from "../../../Reducer/ProductInsideIDReducer"
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import MinusIcon from "../../../assets/images/IconMinus.svg"
import PlusIcon from "../../../assets/images/Iconplus.svg"
import BasketBtn from "../../../assets/images/basket.svg"

function ProductOption() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.setProductID.list);
  const count = useSelector((state) => state.setProductID.count);
  console.log(product);

  const colorPrice = useSelector((state) => state.setProductID.colorPrice);
  const sizePrice = useSelector((state) => state.setProductID.sizePrice);
  const colorName = useSelector((state) => state.setProductID.colorName);
  const sizeName= useSelector((state) => state.setProductID.sizeName);
  // const [count, setCount] = useState(1)
  
  return (
    <div className="product-option">
      <h2>{product.name} {colorName && <span>, {colorName}</span>} {sizeName && <span>, {sizeName}</span>}</h2>
      <Stack spacing={1}>
        <Rating name="size-medium" defaultValue={2} />
      </Stack>
      <p className="price">{product.price && ((product.price.raw + colorPrice + sizePrice)*count)} ₼</p>
      <div className="colors">
        <p>Rəng:</p>
        {
          product.variant_groups && 
          product.variant_groups[0].options.map((item, index)=>(
            <div key={index}  onClick={()=>{dispatch(setColor(item.price.raw)); dispatch(setColorName(item.name))}} className={item.name.toLowerCase()}></div>
          ))
        }
      </div>
      <div className="size">
        <p>Yaddaş:</p>
        {
          product.variant_groups && 
          product.variant_groups[1].options.map((item, index)=>(
            <div key={index} onClick={()=>{dispatch(setSize(item.price.raw)); dispatch(setSizeName(item.name))}} >{item.name}</div>
          ))
        }
      </div>
      <div className="item-quantity">
        <div className="icon" onClick={()=> dispatch(setCount(false))}>
          <img src={MinusIcon} alt="logo"/>
        </div>
        <p>{count}</p>
        <div className="icon" onClick={()=> dispatch(setCount(true))}>
          <img src={PlusIcon} alt="logo"/>
        </div>
      </div>
      <div className="basket-btn">
        <img src={BasketBtn} alt="logo"/>
        Səbətə at
      </div>
      
    </div>
  );
}

export default ProductOption;
