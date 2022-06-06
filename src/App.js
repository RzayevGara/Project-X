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
import CreateAccount from './components/Sign/CreateAccount'
import SendEmail from './components/Login/SendEmail'
import Profile from './Pages/Profile' 
import ProfileOrder from './components/Profile/Order/ProfileOrder'
import ProfileInfo from './components/Profile/User-Info/ProfileInfo'
import Checkout from './Pages/Checkout'
import OrderDetail from './components/Profile/Order-detail/OrderDetail'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
      commerce.cart.retrieve().then((cart) =>  dispatch(setSimpleList(cart)));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path=":id" element={<Products/>}/>
          <Route path=":id/:productid" element={<ProductInside/>}/>
          <Route path="Sebet" element={<Card/>}/>
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/sual-cavab" element={<Question/>}/>
          <Route path="/daxil-ol" element={<Login/>}/>
          <Route path="/daxil-ol/hesabiniza-daxil-olunur" element={<SendEmail/>}/>
          <Route path="/qeydiyyatdan-kec" element={<Signup/>}/>
          <Route path="qeydiyyatdan-kec/hesab-yaradilir" element={<CreateAccount/>}/>
          <Route path="profil" element={<Profile/>}>
            <Route path="/profil/sifarislerim"  element={<ProfileOrder/>}/>
            <Route path="/profil/melumatlarim"  element={<ProfileInfo/>}/>
            <Route path="/profil/sifarislerim/:id"  element={<OrderDetail/>}/>
          </Route>
        <Route path="sifarisleri-tesdiqle" element={<Checkout/>}/>
        </Route>
        <Route path="daxil-ol/:token" element={<GenerateToken/>}/>
      </Routes>
    </>
  );
}

export default App;