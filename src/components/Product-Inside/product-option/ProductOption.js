import React, {useState} from "react";
import { useSelector} from "react-redux";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import MinusIcon from "../../../assets/images/IconMinus.svg"
import PlusIcon from "../../../assets/images/Iconplus.svg"
import BasketBtn from "../../../assets/images/basket.svg"

function ProductOption() {
  const product = useSelector((state) => state.setProductDetail.list);
  console.log(product);

  const [Count, setCount] = useState(1)
  const [ColorPrice, setColorPrice] = useState(0)
  const [SizePrice, setSizePrice] = useState(0)
  const [ColorName, setColorName] = useState("")
  const [SizeName, setSizeName] = useState("")


  
  return (
    <div className="product-option">
      <h2>{product.name} {ColorName && <span>, {ColorName}</span>} {SizeName && <span>, {SizeName}</span>}</h2>
      <Stack spacing={1}>
        <Rating name="size-medium" defaultValue={2} />
      </Stack>
      <p className="price">{product.price && ((product.price.raw + ColorPrice + SizePrice)*Count)} ₼</p>
      <div className="colors">
        <p>Rəng:</p>
        {
          product.variant_groups && 
          product.variant_groups[0].options.map((item, index)=>(
            <div key={index}  onClick={()=>{setColorPrice(item.price.raw); setColorName(item.name)}} className={item.name.toLowerCase()}></div>
          ))
        }
      </div>
      <div className="size">
        <p>Yaddaş:</p>
        {
          product.variant_groups && 
          product.variant_groups[1].options.map((item, index)=>(
            <div key={index} onClick={()=>{setSizePrice(item.price.raw); setSizeName(item.name)}} >{item.name}</div>
          ))
        }
      </div>
      <div className="item-quantity">
        <div className="icon" onClick={()=> setCount(Count>1?Count-1:Count)}>
          <img src={MinusIcon} alt="logo"/>
        </div>
        <p>{Count}</p>
        <div className="icon" onClick={()=> setCount(Count+1)}>
          <img src={PlusIcon} alt="logo"/>
        </div>
      </div>
      <div className="fixed-box">
        <p className="price-box">{product.price && ((product.price.raw + ColorPrice + SizePrice)*Count)} ₼</p>
        <div className="basket-btn">
          <img src={BasketBtn} alt="logo"/>
          Səbətə at
        </div>
      </div>
      <div className="description-phone">
          <h4>Məhsul haqqında</h4>
          <p>{product.description}</p>
      </div>
      
    </div>
  );
}

export default ProductOption;
