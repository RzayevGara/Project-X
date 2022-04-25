import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    category: "hamisi",
    arrayList: [],
    originalList: [],
    filterString:[],
    LocalList:[],
    priceRange: []

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
      state.originalList= action.payload
    },
    sortArray:(state, action)=>{
      action.payload?state.arrayList.sort((a,b) => a.price.raw - b.price.raw):state.arrayList.sort((a,b) =>b.price.raw - a.price.raw)
    },
    returnDefaultSort:(state)=>{
      state.arrayList.sort((a,b) => a.updated - b.updated)
    },
    filterString:(state,action)=>{
      state.filterString=[...state.filterString, action.payload]
      
      let copy = state.originalList.filter((item)=>{
        return (new RegExp(state.filterString.join('|')).test(item.name))
      })
      state.arrayList=copy
    },
    filterPrice:(state, action)=>{
      state.priceRange=[]
      state.priceRange = action.payload
      let copy =state.arrayList.filter((item)=>{
        return(item.price.raw>state.priceRange.minPrice && item.price.raw<state.priceRange.maxPrice)
      })
      state.arrayList=copy


    },
    deleteString:(state, action)=>{
      let filteredArray = state.filterString.filter(e => e !== action.payload)
      state.filterString=filteredArray
      if(filteredArray.length>0){
        let copy =state.originalList.filter((item)=>{
          return (new RegExp(state.filterString.join('|')).test(item.name))
        })
        state.arrayList=copy
      }else{
        state.arrayList=state.originalList
      }
    },
    localData: (state,action) => {
      state.LocalList = [...state.LocalList, action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const {setCategory, SetArray, sortArray, returnDefaultSort, deleteString, filterString,localData, filterPrice} = ProductReducer.actions

export default ProductReducer.reducer