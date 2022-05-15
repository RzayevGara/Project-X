import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    cartToken: "",
}


export const CheckoutReducer = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setCartToken: (state,action) => {
      state.cartToken = action.payload
    }
}
})

// Action creators are generated for each case reducer function
export const {setCartToken} = CheckoutReducer.actions

export default CheckoutReducer.reducer