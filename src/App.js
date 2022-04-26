import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductInside from './Pages/ProductInside'
import Layout from "./components/layout/main/Layout"
import './assets/styles/index.sass'
import Apple from "./Pages/child pages/Apple"
import Cart from "./Pages/Cart"

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/butun-mehsullar" element={<Products/>}/>
          <Route path="/butun-mehsullar/:id" element={<ProductInside/>}/>
          <Route path="/Apple" element={<Apple/>}/>
          <Route path="/Sebet" element={<Cart/>}/>
          <Route path="*" element={
          <div>
            Errordana
          </div>
          }/>
        </Route>
      </Routes>
  );
}

export default App;
