import React, {useEffect}from 'react'
import commerce from '../../../../lib/Commerce';
import { useSelector, useDispatch } from 'react-redux'
import {SetArray} from "../../../../Reducer/ProductReducer"

function PhoneList() {
  const count = useSelector((state) => state.category.category);
  let arrayList = useSelector((state) => state.category.arrayList)
  const dispatch = useDispatch()
  
  
  useEffect(() => {
    const fetchProductList = () => {
      commerce.products.list({category_slug: [count]})
      .then((products) => {
        dispatch(SetArray((products.data)))
      }).catch((error) => {
        console.log('There was an error fetching the products', error)
      });
    }
    fetchProductList()
  },[count, dispatch])

  console.log(arrayList);
  
  return (
    <div className="phone-list">
        
    </div>
  )
}

export default PhoneList