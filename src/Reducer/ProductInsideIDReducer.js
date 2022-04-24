import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    productID:"prod_bO6J5aBEJ7lEjp",
    list: ""
}


export const ProductInsideIDReducer = createSlice({
  name: 'setProductID',
  initialState,
  reducers: {
    setID: (state,action) => {
      state.productID= ""
      state.productID = action.payload
    },
    setList:(state, action)=>{
        state.list = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {setID, setList} = ProductInsideIDReducer.actions

export default ProductInsideIDReducer.reducer