import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    category: "hamisi",
    arrayList: []
}


export const ProductReducer = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state,action) => {
      state.category = action.payload
    },
    SetArray: (state, action)=>{
      state.arrayList= action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {setCategory, SetArray} = ProductReducer.actions

export default ProductReducer.reducer