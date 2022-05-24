import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import MinusIcon from "../../../assets/images/IconMinus.svg";
import PlusIcon from "../../../assets/images/Iconplus.svg";
import BasketBtn from "../../../assets/images/basket.svg";
import {
  setVariantColor,
  setOptionColor,
  setVariantSize,
  setOptionSize,
  setItemCount,
  setItemID,
  setAssetID,
  setColorMsg, 
  setSizeMsg
} from "../../../Reducer/AddCardReducer";
import commerce from "../../../lib/Commerce";
import {setSimpleList} from "../../../Reducer/CardListReducer"
import { TailSpin  } from 'react-loading-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductOption() {
  const product = useSelector((state) => state.setProductDetail.list);
  const colorvr = useSelector((state) => state.AddToCard.VariantColor);
  const colorop = useSelector((state) => state.AddToCard.OptionColor);
  const sizevr = useSelector((state) => state.AddToCard.VariantSize);
  const sizeop = useSelector((state) => state.AddToCard.OptionSize);
  const quantity = useSelector((state) => state.AddToCard.ItemCount);

  const [IsLoading, setIsLoading] = useState(false)
  
  const [Count, setCount] = useState(1);
  const [ColorPrice, setColorPrice] = useState(0);
  const [SizePrice, setSizePrice] = useState(0);
  const [ColorName, setColorName] = useState("");
  const [SizeName, setSizeName] = useState("");


  const colorMsg = useSelector((state) => state.AddToCard.colorMsg)
  const sizeMsg = useSelector((state) => state.AddToCard.sizeMsg)
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setItemID(product.id))
  }, [dispatch, product])

  const addBasket = () =>   toast.success('Məhsul səbətə əlavə olundu!', {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });


  const [show, setShow] = useState(false)
  const controlNavbar = () => {
    let maxY = document.documentElement.scrollHeight - document.documentElement.clientHeight
    let scrollPercent = (maxY*35)/100
    let scrollPercentRounded = Math.round(scrollPercent);
    let final = maxY - scrollPercentRounded
    console.log(final)
    console.log(window.scrollY)
    if (window.scrollY > final ) {
        setShow(true)
    }else{
      setShow(false)
    }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])

  return (
    <div className="product-option">
      {IsLoading && 
      <div className="black-page">
        <TailSpin  stroke="#00D68F" className="loading"/>
        <p>Məhsul səbətə əlavə olunur</p>
      </div>
      }
      <h2>
        {product.name} {ColorName && <span>, {ColorName}</span>}{" "}
        {SizeName && <span>, {SizeName}</span>}
      </h2>
      <Stack spacing={1}>
        <Rating name="size-medium" defaultValue={2} />
      </Stack>
      <p className="price">
        {product.price && (product.price.raw + ColorPrice + SizePrice) * Count}{" "}
        ₼
      </p>
      <div className="colors">
        <div className="color-option">
          <p>{product.variant_groups && product.variant_groups.length>0?'Rəng:':''}</p>
          {product.variant_groups && product.variant_groups.length>0?
            product.variant_groups[0].options.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setColorPrice(item.price.raw);
                  setColorName(item.name);
                  dispatch(setVariantColor(product.variant_groups[0].id));
                  dispatch(setOptionColor(item.id));
                  dispatch(setAssetID(item.assets));
                  dispatch(setColorMsg(""));
                  document.querySelectorAll(".color-box").forEach((item)=>
                    item.classList.remove("active-color")
                  )
                  document.querySelector(`.${item.name.toLowerCase()}`).classList.add("active-color")
                }}
                className={`color-box ${item.name.toLowerCase()}`}
                >
                  <div></div>
                </div>
            )):" "
          }
        </div>
      <p className="color-msg">{colorMsg && colorMsg}</p>
      </div>
      <div className="size">
        <div className="size-option">
          <p>{product.variant_groups && product.variant_groups.length>1?'Yaddaş:':''}</p>
          {product.variant_groups && product.variant_groups.length>1?
            product.variant_groups[1].options.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setSizePrice(item.price.raw);
                  setSizeName(item.name);
                  dispatch(setVariantSize(product.variant_groups[1].id));
                  dispatch(setOptionSize(item.id));
                  dispatch(setSizeMsg(""))
                  document.querySelectorAll(".size-box").forEach((item)=>
                    item.classList.remove("active-size")
                  )
                  document.querySelectorAll(".size-box")[index].classList.add("active-size")
                }}
                className={`size-box`}
              >
                {item.name}
              </div>
            )):' '
          }
        </div>
      <p className="size-msg">{sizeMsg && sizeMsg}</p>
      </div>
      <div className="item-quantity">
        <div
          className="icon"
          onClick={() => {
            setCount(Count > 1 ? Count - 1 : Count);
            dispatch(setItemCount(false));
          }}
        >
          <img src={MinusIcon} alt="logo" />
        </div>
        <p>{Count}</p>
        <div
          className="icon"
          onClick={() => {
            setCount(Count + 1);
            dispatch(setItemCount(true));
          }}
        >
          <img src={PlusIcon} alt="logo" />
        </div>
      </div>
      <div className={show?"fixed-box hideBox":"fixed-box"}>
        <p className="price-box">
          {product.price &&
            (product.price.raw + ColorPrice + SizePrice) * Count}{" "}
          ₼
        </p>
        <div
          onClick={() => {
            if(product.variant_groups.length===2){
              if(colorop && sizeop){
                setIsLoading(true)
                commerce.cart.add(`${product.id}`, quantity,{
                  [colorvr]: `${colorop}`,
                  [sizevr]: `${sizeop}`,
                }).then(() => commerce.cart.retrieve().then((items) => {dispatch(setSimpleList(items)); setIsLoading(false);addBasket()}))
                .catch((error) => {console.log("error"); setIsLoading(false)})
              }else{
                if(!colorop){
                  dispatch(setColorMsg("Zəhmət olmasa rəng seçin"))
                }
                if(!sizeop){
                  dispatch(setSizeMsg("Zəhmət olmasa yaddaş seçin"))
                }
            }
          }else if(product.variant_groups.length===1){
            if(colorop){
              setIsLoading(true)
              commerce.cart.add(`${product.id}`, quantity,{
                [colorvr]: `${colorop}`,
              }).then(() => commerce.cart.retrieve().then((items) => {dispatch(setSimpleList(items)); setIsLoading(false);addBasket()}));
            }else{
              dispatch(setColorMsg("Zəhmət olmasa rəng seçin"))
            }
          }else if(product.variant_groups.length===0){
            setIsLoading(true)
            commerce.cart.add(`${product.id}`, quantity
            ).then(() => commerce.cart.retrieve().then((items) => {dispatch(setSimpleList(items)); setIsLoading(false);addBasket()}));
          }
          }}
          className="basket-btn"
        >
          <img src={BasketBtn} alt="logo" />
          Səbətə at
        </div>
      </div>
      <div className="description-phone">
        <h4>Məhsul haqqında</h4>
        <p>{product.description}</p>
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default ProductOption;
