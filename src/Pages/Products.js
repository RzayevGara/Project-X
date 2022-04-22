// import React, {useState, useEffect} from 'react'
import Filter from "../components/Products/filter/Filter"
import ProductList from "../components/Products/product-list/ProductList"
import "./products.sass"
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as RouterLink } from 'react-router-dom';

function Products() {
  const breadcrumbs = [
    <RouterLink key="1" to="/" >
      Ana Sehife
    </RouterLink>,
    <Typography key="2" color="text.primary">
      Telefonlar
    </Typography>,
  ]

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