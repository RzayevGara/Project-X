import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    cartToken: "",
    cartID: "",
    fname: "",
    lname:"",
    email: "",
    phone: "",
    shippingName: "",
    shippingAddress: "",
    shippingCountry: "",
    shippingCity: "",
    shippingMethod: "",
    countryIndex: "",
    loading: false,
    checkoutLiveObject: ""
}


export const CheckoutReducer = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setCartToken: (state,action) => {
      state.cartToken = action.payload
    },
    setCartID: (state,action)=>{
      state.cartID = action.payload
    },
    setName: (state,action) => {
      state.fname = action.payload
    },
    setLastName: (state,action) => {
      state.lname = action.payload
    },
    setEmail: (state,action) => {
      state.email = action.payload
    },
    setPhone: (state,action) => {
      state.phone = action.payload
    },



    setShippingName: (state,action) => {
      state.shippingName = action.payload
    },
    setShippingAddress: (state,action) => {
      state.shippingAddress = action.payload
    },
    setShippingCountry: (state,action) => {
      state.shippingCountry = action.payload
    },
    setCountryIndex: (state,action) => {
      state.countryIndex = action.payload
    },
    setShippingCity: (state,action) => {
      state.shippingCity = action.payload
    },
    setShippingMethod: (state,action)=>{
      state.shippingMethod = action.payload
    },
    setLoading: (state,action) => {
      state.loading = action.payload
    },
    setReset: (state) => {
      state.cartToken =  "";
      state.cartID =  "";
      state.fname =  "";
      state.lname = "";
      state.email =  "";
      state.phone =  "";
      state.shippingName =  "";
      state.shippingAddress =  "";
      state.shippingCountry =  "";
      state.shippingCity =  "";
      state.shippingMethod =  "";
    },
    setLiveObject: (state,action) => {
      state.checkoutLiveObject = action.payload
    }

}
})

// Action creators are generated for each case reducer function
export const {setCartToken, setCartID, setName, setLastName, setEmail, setPhone, setShippingName,setShippingAddress, setShippingCountry, setShippingCity, setShippingMethod, setLoading, setReset, setCountryIndex, setLiveObject} = CheckoutReducer.actions

export default CheckoutReducer.reducer