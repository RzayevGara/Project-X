import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    productID:"",
    list: "",
    sizePrice: 0,
    colorPrice: 0,
    count: 1,
    total: "",
    colorName: "",
    sizeName: ""
}


export const ProductInsideIDReducer = createSlice({
  name: 'setProductID',
  initialState,
  reducers: {
    setID: (state,action) => {
      state.productID = action.payload
    },
    setList:(state, action)=>{
        state.list = action.payload
    },
    setSize:(state, action)=>{
      state.sizePrice = action.payload
    },
    setColor:(state, action)=>{
      state.colorPrice = action.payload
    },
    setCount:(state, action)=>{
      if(!action.payload){
        if(state.count===1){
          state.count = 1
        }else{
          state.count -=1
        }
      }else{
        state.count +=1 
      }
    },
    setColorName:(state, action)=>{
      state.colorName = action.payload
    },
    setSizeName:(state, action)=>{
      state.sizeName = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {setID, setList, setSize ,setColor,setCount, setColorName, setSizeName} = ProductInsideIDReducer.actions

export default ProductInsideIDReducer.reducer