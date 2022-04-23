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
    },
    sortArray:(state, action)=>{
      action.payload?state.arrayList.sort((a,b) => a.price.raw - b.price.raw):state.arrayList.sort((a,b) =>b.price.raw - a.price.raw)
    },
    returnDefaultSort:(state)=>{
      state.arrayList.sort((a,b) => a.updated - b.updated)
    }
  },
})

// Action creators are generated for each case reducer function
export const {setCategory, SetArray, sortArray, returnDefaultSort} = ProductReducer.actions

export default ProductReducer.reducer