import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    increase: false,
    decrease: false,
    delete: false,
    addBasket: false,
}


export const AlertReducer = createSlice({
  name: 'alertReducer',
  initialState,
  reducers: {
    setIncrease: (state,action) => {
      state.increase = action.payload
    },
    setDecrease: (state,action) => {
      state.decrease = action.payload
    },
    setDelete: (state,action) => {
      state.delete = action.payload
    },
    setBasket: (state,action) => {
      state.addBasket = action.payload
    },
}
})

// Action creators are generated for each case reducer function
export const {setIncrease, setDecrease, setDelete, setBasket} = AlertReducer.actions

export default AlertReducer.reducer