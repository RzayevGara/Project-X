import React, {useEffect} from 'react'
import Carousel from "../components/Home/carousel/Carousel"
import ProductSwipe from "../components/Home/productSwipe/ProductSwipe"
import Card from "../components/Home/card/main/Card"
import commerce from '../lib/Commerce';
import LinkCard from "../components/Home/link-card/main/LinkCard"
import About from "../components/Home/about/main/About"
import Brands from "../components/Home/brands/Brands"
import "./home.sass"
import {useDispatch, useSelector} from 'react-redux'
import {setPhoneList, setAccessoryList, setFetchStatus} from '../Reducer/HomePageReducer'




function Home() {
  const dispatch = useDispatch()
  const fetchStatus = useSelector((state) => state.homeList.fetchProduct)
  console.log(fetchStatus);
  const phone = useSelector((state) => state.homeList.phoneList)
  const accessory = useSelector((state) => state.homeList.accessoryList)
  const loadingPhone  = useSelector((state) => state.homeList.loadingPhone)
  const loadingAccessory  = useSelector((state) => state.homeList.loadingAccessory)
  
  useEffect(() => {
    const changePage = () => {
      window.scrollTo({top: 0});
    };
    changePage()
    if(fetchStatus===true){
      const fetchPhone = () => {
        commerce.products.list({category_slug: ['butun-telefonlar'],})
        .then((products) => {
          dispatch(setPhoneList(products.data))
        }).catch((error) => {
          console.log('There was an error fetching the products', error)
        });
      }
      const fetchAccessory = () => {
        commerce.products.list({category_slug: ['aksesuarlar'],})
        .then((products) => {
          dispatch(setAccessoryList(products.data))
        }).catch((error) => {
          console.log('There was an error fetching the products', error)
        });
      }
      fetchPhone();
      fetchAccessory()
      dispatch(setFetchStatus(false))
    }
  }, [dispatch, fetchStatus]);


  return (
    <div id="home">
      <div className="container">
        <Carousel/>
        <ProductSwipe dataLoading={loadingPhone} BackData={phone} title={"Ən çox satılan məhsullar"}/>
        <ProductSwipe dataLoading={loadingPhone} BackData={phone} title={"Yeni gələn məhsullar"}/>
        <Card/>
        <ProductSwipe dataLoading={loadingAccessory} BackData={accessory} title={"Yeni gələn aksesuarlar"}/>
        <LinkCard countPhone={phone.length} countAccessory={accessory.length}/>
        <About/>
      </div>
        <Brands/>
    </div>
  )
}

export default Home