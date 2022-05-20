import React, {useEffect} from 'react'
import commerce from '../../../lib/Commerce'
import {useSelector, useDispatch} from "react-redux";
import {setOrder, setLineItems} from '../../../Reducer/CustomerOrder'
import {useNavigate} from 'react-router-dom'


function ProfileOrder() {
  const customerToken = useSelector((state) => state.login.customerToken)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    commerce.customer.getOrders(`${localStorage.getItem('commercejs_customer_id')}`).then((orders) => dispatch(setOrder(orders.data)));
  }, [dispatch])

// console.log(localStorage.getItem('commercejs_customer_id'))
  const orders = useSelector((state) => state.customer.orders)
  console.log(orders)
  return (
    <div className="profile-order">
         <p className="profile-order_title">Sifarişlərim (4 məhsul)</p>
         <ul className="profile-order_div">
           {orders &&
           orders.map((item)=>(
             item.order.line_items.map((lineItem, index)=>(
               <li className="profile-order_list" key={index}>
                <img src={lineItem.image.url} alt="logo"/>
                <div className="profile-order_detail">
                    <p className="profile-order-detail_date">
                      Sifariş tarixi:
                      <br/>
                      <span>12.04.2020</span>
                    </p>
                    <p className="profile-order-detail_name">
                      Məhsul:
                      <br/>
                      <span>{lineItem.product_name}</span>
                    </p>
                    <p className="profile-order-detail_price">
                      Ümumi məbləğ:
                      <br/>
                      <span>{lineItem.line_total.formatted_with_symbol}</span>
                    </p>
                    <button onClick={() =>{navigate(`/profil/sifarislerim/${item.id}`, { replace: true }); dispatch(setLineItems(lineItem.id))}} type="button">Sifarişin detalları</button>
                </div>
               </li>
             ))
           ))
           }
         </ul>
    </div>
  )
}

export default ProfileOrder