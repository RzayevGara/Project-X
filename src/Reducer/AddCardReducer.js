import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    VariantColor: "",
    OptionColor: "",
    VariantSize: "",
    OptionSize: "",
    ItemCount: 1,
    ItemonBasket: "",
}


export const FilterReducer = createSlice({
  name: 'AddToCard',
  initialState,
  reducers: {
    setVariantColor: (state,action) => {
      state.VariantColor = action.payload
    },
    setOptionColor: (state,action) => {
      state.OptionColor = action.payload
    },
    setVariantSize: (state,action) => {
      state.VariantSize = action.payload
    },
    setOptionSize: (state,action) => {
      state.OptionSize = action.payload
    },
    setItemCount: (state,action) => {
        if(!action.payload){
            state.ItemCount>1?state.ItemCount -=1:state.ItemCount = 1
          }else{
            state.ItemCount +=1 
          }
    }
  },
})

// Action creators are generated for each case reducer function
export const {setVariantColor, setOptionColor, setVariantSize, setOptionSize, setItemCount} = FilterReducer.actions

export default FilterReducer.reducer