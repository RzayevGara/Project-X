import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductInside from './Pages/ProductInside'
import Layout from "./components/layout/main/Layout"
import './assets/styles/index.sass'
import Card from "./Pages/Card"
import commerce from './lib/Commerce';
import React, {useEffect, useState} from 'react'
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
import ProfileFavorite from './components/Profile/Favorites/ProfileFavorite'
import ProfileInfo from './components/Profile/User-Info/ProfileInfo'
import Checkout from './Pages/Checkout'



function App() {
  const dispatch = useDispatch()

  // const [token, setToken ] = useState('')
  useEffect(() => {
    const fetcha = ()=>{
      // commerce.cart.contents().then((items) => dispatch(setSimpleList(items)));
      commerce.cart.retrieve().then((cart) =>  dispatch(setSimpleList(cart)));
    }
    console.log("isledi");
    fetcha()


//     commerce.checkout.generateToken('cart_NXELwjqpLql3A4', { type: 'cart' })
//     .then((checkout) => setToken(checkout.id))

//     // commerce.checkout.getShippingOptions(`${token}`, {
//     //   country: 'US',
//     //   region: 'CA',
//     // }).then((response) => console.log(response));

//   commerce.checkout.capture(`${token}`, {
//   customer: {
//     firstname: 'John',
//     lastname: 'Doe',
//     email: 'john.doe@example.com'
//   },
//   shipping: {
//     name: 'John Doe',
//     street: '123 Fake St',
//     town_city: 'San Francisco',
//     county_state: 'US-CA',
//     postal_zip_code: '94103',
//     country: 'US'
//   },
//   fulfillment: {
//     shipping_method: 'ship_r2LM5Q4GvoZV1g'
//   },
//   billing: {
//     name: 'John Doe',
//     street: '234 Fake St',
//     town_city: 'San Francisco',
//     county_state: 'US-CA',
//     postal_zip_code: '94103',
//     country: 'US'
//   },
//   payment: {
//     gateway: 'test_gateway',
//     card: {
//       number: '4242424242424242',
//       expiry_month: '02',
//       expiry_year: '24',
//       cvc: '123',
//       postal_zip_code: '94107',
//     },
//   },
// }).then((response) => console.log(response));

  }, [dispatch,]);
  

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
          <Route path="/daxil-ol/hesabiniza-daxil-olunur" element={<SendEmail/>}/>
          <Route path="/qeydiyyatdan-kec" element={<Signup/>}/>
          <Route path="qeydiyyatdan-kec/hesab-yaradilir" element={<CreateAccount/>}/>
          <Route path="profil" element={<Profile/>}>
            <Route path="/profil/sifarislerim"  element={<ProfileOrder/>}/>
            <Route path="/profil/favorilerim"  element={<ProfileFavorite/>}/>
            <Route path="/profil/melumatlarim"  element={<ProfileInfo/>}/>
          </Route>
        <Route path="sifarisleri-tesdiqle" element={<Checkout/>}/>
        </Route>
        <Route path="daxil-ol/:token" element={<GenerateToken/>}/>
      </Routes>
  );
}

export default App;