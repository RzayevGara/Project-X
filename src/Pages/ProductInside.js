import React, {useEffect} from 'react'
import "./productInside.sass";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link as RouterLink, useParams, useNavigate} from "react-router-dom";
import commerce from '../lib/Commerce';
import { useSelector, useDispatch } from "react-redux";
import { setList } from "../Reducer/ProductInsideIDReducer";
import ProductImages from "../components/Product-Inside/product-image-slider/ProductImages"
import ProductOption from "../components/Product-Inside/product-option/ProductOption"


function ProductInside() {
  let navigate = useNavigate();
  let {id} = useParams();
  console.log('my idddd', id)
    let arrayList = useSelector((state) => state.setProductID.productID);
  console.log(arrayList);
  const breadcrumbs = [
    <RouterLink key="1" to="/">
      Ana Sehife
    </RouterLink>,
    <RouterLink key="2" to="/telefonlar">
      Telefonlar
    </RouterLink>,
    <Typography key="3" color="text.primary">
      Telefonlar
    </Typography>,
  ];

  const category = useSelector((state) => state.setProductID.productID);
  // const product = useSelector((state) => state.setProductID.list);
  // console.log(product);
  const dispatch = useDispatch();

  useEffect(() => {
      const fetchProduct = () => {
        commerce.products.retrieve([category]).then((product) => dispatch(setList(product)));
      }
      fetchProduct()
  }, [category, dispatch]);

  React.useEffect(() => {
    if(id !== arrayList){
      return navigate("*")
    }
}, [id, arrayList,navigate]);
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
      </div>
    </div>
  );
}

export default ProductInside;
