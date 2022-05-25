import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    list: "",
    breadCrumbs: ""
}


export const ProductInsideDetail = createSlice({
  name: 'setProductDetail',
  initialState,
  reducers: {
    ProductInsideList:(state, action)=>{
        state.list = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {ProductInsideList} = ProductInsideDetail.actions

export default ProductInsideDetail.reducer