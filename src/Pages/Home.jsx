import React, {useState, useEffect} from 'react'
import Carousel from "../components/carousel/Carousel"
import PhoneList from "../components/phoneList/PhoneList"
import Card from "../components/card/main/Card"
import commerce from '../lib/Commerce';
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

  useEffect(() => {
    fetchPhone();
    fetchAccessory()
  }, []);


  return (
    <div id="home">
        <Carousel/>
        <PhoneList dataLoading={loadingPhone} BackData={phone} title={"Ən çox satılan məhsullar"}/>
        <PhoneList dataLoading={loadingPhone} BackData={phone} title={"Yeni gələn məhsullar"}/>
        <Card/>
        <PhoneList dataLoading={loadingAccessory} BackData={accessory} title={"Yeni gələn aksessuarlar"}/>
    </div>
  )
}

export default Home