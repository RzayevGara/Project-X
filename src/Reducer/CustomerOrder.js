import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    orders: "",
    orderDetail: "",
    orderCount: "",
    customerInfo: "",
    profileMenuActive: ""
}


export const CustomerOrder = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setOrder: (state,action) => {
      state.orders = action.payload
    },
    setOrderDetail: (state,action) => {
      state.orderDetail = action.payload
    },
    setOrderCount: (state,action) => {
      state.orderCount = action.payload
    },
    setCustomerInfo: (state,action) => {
      state.customerInfo = action.payload
    },
    setProfileMenuActive: (state,action) => {
      state.profileMenuActive = action.payload
    }
}
})

// Action creators are generated for each case reducer function
export const {setOrder, setOrderDetail, setOrderCount, setCustomerInfo, setProfileMenuActive} = CustomerOrder.actions

export default CustomerOrder.reducer