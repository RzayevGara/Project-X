import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import commerce from '../../../lib/Commerce'
import {useSelector, useDispatch} from "react-redux";
import {setOrderDetail} from '../../../Reducer/CustomerOrder'

function OrderDetail(){
    let {id} = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        commerce.customer.getOrder(`${id}`).then((order) => dispatch(setOrderDetail(order)));
    },[id, dispatch])

    const order = useSelector((state) => state.customer.orderDetail)
    const lineItemsID = useSelector((state) => state.customer.lineItems)

    console.log(order)

    return (
        <div className="order-detail">
            {
            order && 
            order.order.line_items.map((lineItem, index) =>{
                if(lineItem.id === lineItemsID){
                    return(
                        <div key={index}>123</div>
                    )
                }
            })
            }
        </div>
    )
}

export default OrderDetail