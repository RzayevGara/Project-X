import React, {useState, useEffect} from 'react'
import "./productInside.sass";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink, useParams} from "react-router-dom";
import commerce from '../lib/Commerce';
import { useSelector, useDispatch } from "react-redux";
import { ProductInsideList } from "../Reducer/ProductInsideDetail";
import ProductImages from "../components/Product-Inside/product-image-slider/ProductImages"
import ProductOption from "../components/Product-Inside/product-option/ProductOption"
import ParamsComment from "../components/Product-Inside/Params-Comment/ParamsComment"


function ProductInside() {
  let {id} = useParams();
  
  const breadcrumbs = [
    <RouterLink key="1" to="/">
      Ana Sehife
    </RouterLink>,
    <RouterLink key="2" to="/butun-mehsullar">
      Bütün Məhsullar
    </RouterLink>,
    <Typography key="3" color="text.primary">
      Telefonlar
    </Typography>,
  ];

  const dispatch = useDispatch();

  const [Switch, setSwitch] = useState(false)

  useEffect(() => {
      const fetchProduct = () => {
        commerce.products.retrieve([id]).then((product) => dispatch(ProductInsideList(product)));
      }
      fetchProduct()
  }, [id, dispatch]);

  return (
    <div id="product-inside">
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
  );
}

export default ProductInside;
