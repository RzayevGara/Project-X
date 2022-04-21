import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Layout from "./components/layout/main/Layout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
