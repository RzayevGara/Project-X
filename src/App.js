import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductInside from './Pages/ProductInside'
import Layout from "./components/layout/main/Layout"
import './assets/styles/index.sass'
import Card from "./Pages/Card"
import commerce from './lib/Commerce';
import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {setSimpleList} from "./Reducer/CardListReducer"
import ErrorPage from './components/Error Page/ErrorPage'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const fetcha = ()=>{
      // commerce.cart.contents().then((items) => dispatch(setSimpleList(items)));
      commerce.cart.retrieve().then((cart) =>  dispatch(setSimpleList(cart)));
    }
    console.log("isledi");
    fetcha()
  }, [dispatch]);

  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path=":id" element={<Products/>}/>
          {/* <Route path="butun-telefonlar/:id" element={<Products/>}/> */}
          <Route path=":id/:productid" element={<ProductInside/>}/>
          <Route path="Sebet" element={<Card/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
  );
}

export default App;
