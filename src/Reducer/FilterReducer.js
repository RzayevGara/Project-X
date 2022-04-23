import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    filterActive: false
}


export const FilterReducer = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActive: (state,action) => {
      state.filterActive = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {setActive} = FilterReducer.actions

export default FilterReducer.reducer