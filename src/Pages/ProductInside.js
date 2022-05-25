import React, {useState, useEffect} from 'react'
import "./productInside.sass";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink, useParams} from "react-router-dom";
import commerce from '../lib/Commerce';
import {useDispatch, useSelector } from "react-redux";
import { ProductInsideList } from "../Reducer/ProductInsideDetail";
import ProductImages from "../components/Product-Inside/product-image-slider/ProductImages"
import ProductOption from "../components/Product-Inside/product-option/ProductOption"
import ParamsComment from "../components/Product-Inside/Params-Comment/ParamsComment"
import ErrorPageComp from '../components/Error Page/ErrorPage'
import { TailSpin  } from 'react-loading-icons'

function ProductInside() {
  let {productid} = useParams();

  const breadCrumbsTwo = useSelector((state) => state.category.menuActiveText)

  const productName = useSelector((state) => state.setProductDetail.list);
  
  const breadcrumbs = [
    <RouterLink key="1" to="/">
      Ana Sehife
    </RouterLink>,
    <RouterLink key="2" to={`/${breadCrumbsTwo}`}>
      {breadCrumbsTwo==="butun-telefonlar"?"Bütün Telefonlar":breadCrumbsTwo.charAt(0).toUpperCase() + breadCrumbsTwo.slice(1)}
    </RouterLink>,
    <Typography key="3" color="text.primary">
      {productName.name}
    </Typography>,
  ];

  const dispatch = useDispatch();

  const [Switch, setSwitch] = useState(false)
  const [ErrorPage, setErrorPage] = useState(false)
  const [IsLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
      const fetchProduct = () => {
        commerce.products.retrieve([productid]).then((product) =>{ dispatch(ProductInsideList(product)); setIsLoading(false)}).catch((error) => setErrorPage(true));
      }
      fetchProduct()
      const changePage = () => {
        window.scrollTo({top: 0});
      };
      changePage()
  }, [productid, dispatch]);

  if (!ErrorPage){
    return (
      <div id="product-inside">
      {IsLoading && 
      <div className="black-page">
        <TailSpin  stroke="#00D68F" className="loading"/>
        <p>Məhsullar yüklənir</p>
      </div>
      }
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <div className="container">
            <div className="product-detail">
                <ProductImages/>
                <ProductOption/>
            </div>
            <div className="params-comment">
              <p className={!Switch?"active-text":null} onClick={()=>setSwitch(false)}>Texniki Xüsusiyyətləri</p>
              <p className={Switch?"active-text":null}  onClick={()=>setSwitch(true)}>Rəylər</p>
            </div>
            <ParamsComment switch={Switch}/>
        </div>
      </div>
    )
  }else{
    return (
      <ErrorPageComp/>
    )
  }

}

export default ProductInside;
