import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    orders: "",
    lineItems: "item_RyWOwmPOMAlnEa",
    orderDetail: "",
    orderCount: ""
}


export const CustomerOrder = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setOrder: (state,action) => {
      state.orders = action.payload
    },
    setLineItems: (state,action) => {
      state.lineItems = action.payload
    },
    setOrderDetail: (state,action) => {
      state.orderDetail = action.payload
    },
    setOrderCount: (state,action) => {
      state.orderCount = action.payload
    }
}
})

// Action creators are generated for each case reducer function
export const {setOrder, setLineItems, setOrderDetail, setOrderCount} = CustomerOrder.actions

export default CustomerOrder.reducer