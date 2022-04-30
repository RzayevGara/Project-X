import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    VariantColor: "",
    OptionColor: "",
    VariantSize: "",
    OptionSize: "",
    ItemCount: 1,
    ItemonBasket: "",
    itemID: "",
    assetID: ""
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
    },
    setItemID: (state,action) => {
      state.itemID = action.payload
      state.VariantColor = ""
      state.OptionColor = ""
      state.VariantSize = ""
      state.OptionSize = ""
    },
    setAssetID: (state,action) => {
      state.assetID = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {setVariantColor, setOptionColor, setVariantSize, setOptionSize, setItemCount, setItemID, setAssetID} = FilterReducer.actions

export default FilterReducer.reducer