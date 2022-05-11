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
import Question from './Pages/Question'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import GenerateToken from './components/Login/GenerateToken'

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
          <Route path=":id/:productid" element={<ProductInside/>}/>
          <Route path="Sebet" element={<Card/>}/>
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/sual-cavab" element={<Question/>}/>
          <Route path="/daxil-ol" element={<Login/>}/>
          <Route path="/qeydiyyatdan-kec" element={<Signup/>}/>
        </Route>
        <Route path="daxil-ol/:token" element={<GenerateToken/>}/>
      </Routes>
  );
}

export default App;