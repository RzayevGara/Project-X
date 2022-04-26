import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    ProductID:""
}


export const FilterReducer = createSlice({
  name: 'saveID',
  initialState,
  reducers: {
    setID: (state,action) => {
      state.ProductID = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setID} = FilterReducer.actions

export default FilterReducer.reducer