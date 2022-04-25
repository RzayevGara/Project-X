import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    productID:"prod_RyWOwmPvVGlnEa",
    list: "",
    sizePrice: 0,
    colorPrice: 0,
    count: 1,
    total: ""
}


export const ProductInsideIDReducer = createSlice({
  name: 'setProductID',
  initialState,
  reducers: {
    setID: (state,action) => {
      state.productID= ""
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
        state.count=1?state.count = 1:state.count -=1
      }else{
        state.count +=1 
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const {setID, setList, setSize ,setColor,setCount} = ProductInsideIDReducer.actions

export default ProductInsideIDReducer.reducer