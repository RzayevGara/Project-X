import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import ProductInside from './Pages/ProductInside'
import Layout from "./components/layout/main/Layout"
import './assets/styles/index.sass'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/telefonlar" element={<Products/>}/>
        <Route path="/telefonlar/:id" element={<ProductInside/>}/>
      </Route>
    </Routes>
  );
}

export default App;
