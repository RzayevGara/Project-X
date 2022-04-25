import React, {useState, useEffect} from 'react'
import Carousel from "../components/Home/carousel/Carousel"
import ProductSwipe from "../components/Home/productSwipe/ProductSwipe"
import Card from "../components/Home/card/main/Card"
import commerce from '../lib/Commerce';
import LinkCard from "../components/Home/link-card/main/LinkCard"
import About from "../components/Home/about/main/About"
import Brands from "../components/Home/brands/Brands"
import "./home.sass"





function Home() {
  const [phone, setPhone] = useState([]);
  const [accessory, setAccessory] = useState([]);
  const [loadingPhone, setLoadingPhone] = useState(true)
  const [loadingAccessory, setLoadingAccessory] = useState(true)
  
  const fetchPhone = () => {
    commerce.products.list({category_slug: ['phone'],})
    .then((products) => {
      setLoadingPhone(false)
      setPhone(products.data)
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }

  const fetchAccessory = () => {
    commerce.products.list({category_slug: ['aksessuarlar'],})
    .then((products) => {
      setLoadingAccessory(false)
      setAccessory(products.data)
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }

  // const fetchA = () => {
  //   commerce.products.getVariants('prod_31q0o39jQBlDdj', 'vrnt_9BAmwJOE3YoeXd').then((variant) => console.log(variant.data));
  //   // commerce.categories.list().then((category) => console.log(category));
  // //   const url = new URL(
  // //     "https://api.chec.io/v1/products/prod_31q0o39jQBlDdj/variants/optn_nPEVlNQAJd5a7d"
  // // );
  
  // // let headers = {
  // //     "X-Authorization": "pk_421899a6fa77f00b3c5cf2fc90d064890cfdecfe7bffe",
  // //     "Accept": "application/json",
  // //     "Content-Type": "application/json",
  // // };
  
  // // fetch(url, {
  // //     method: "GET",
  // //     headers: headers,
  // // })
  // //     .then(response => response.json())
  // //     .then(json => console.log(json.data));
  // }
  

  useEffect(() => {
    fetchPhone();
    fetchAccessory()
    // fetchA()
  }, []);


  return (
    <div id="home">
      <div className="container">
        <Carousel/>
        <ProductSwipe dataLoading={loadingPhone} BackData={phone} title={"Ən çox satılan məhsullar"}/>
        <ProductSwipe dataLoading={loadingPhone} BackData={phone} title={"Yeni gələn məhsullar"}/>
        <Card/>
        <ProductSwipe dataLoading={loadingAccessory} BackData={accessory} title={"Yeni gələn aksessuarlar"}/>
        <LinkCard countPhone={phone.length}/>
        <About/>
      </div>
        <Brands/>
    </div>
  )
}

export default Home