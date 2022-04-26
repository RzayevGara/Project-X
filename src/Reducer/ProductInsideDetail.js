import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    list: "",
}


export const ProductInsideDetail = createSlice({
  name: 'setProductDetail',
  initialState,
  reducers: {
    setList:(state, action)=>{
        state.list = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {setList} = ProductInsideDetail.actions

export default ProductInsideDetail.reducer