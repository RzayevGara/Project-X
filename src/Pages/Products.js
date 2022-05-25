import React, {useEffect} from 'react'
import Filter from "../components/Products/filter/main/Filter"
import ProductList from "../components/Products/product-list/main/ProductList"
import "./products.sass"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as RouterLink , useParams} from 'react-router-dom';

function Products() {
  let {id} = useParams()

  const breadcrumbs = [
    id==="butun-telefonlar"?
[    <RouterLink key="1" to="/" >
      Ana Sehife
    </RouterLink>,
    <Typography key="2" color="text.primary">
      Bütün Telefonlar
    </Typography>]
    :
    [    
    <RouterLink key="1" to="/" >
      Ana Sehife
    </RouterLink>,
    <Typography key="3" color="text.primary">
      {id[0].toUpperCase() + id.slice(1)}
    </Typography>]
  ]
  useEffect(()=>{
    const changePage = () => {
      window.scrollTo({top: 0});
    };
    changePage()
  },[])

  return (
    <div id="products">
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <div className="container">
        <Filter/>
        <ProductList/>
      </div>
    </div>
  )
}

export default Products