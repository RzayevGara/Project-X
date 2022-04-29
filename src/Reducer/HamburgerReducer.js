import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    HamburgerStatus: false,
}


export const HamburgerReducer = createSlice({
  name: 'setHamburger',
  initialState,
  reducers: {
    HamburgerClick:(state, action)=>{
        state.HamburgerStatus = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {HamburgerClick} = HamburgerReducer.actions

export default HamburgerReducer.reducer