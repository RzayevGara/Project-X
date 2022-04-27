import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    SimpleList: "",
}


export const CardListReducer = createSlice({
  name: 'listOrder',
  initialState,
  reducers: {
    setSimpleList: (state,action) => {
      state.SimpleList = action.payload
    }
}
})

// Action creators are generated for each case reducer function
export const {setSimpleList} = CardListReducer.actions

export default CardListReducer.reducer