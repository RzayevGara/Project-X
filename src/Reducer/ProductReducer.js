import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    category: "",
    arrayList: [],
    originalList: [],
    filterString:[],
    LocalList:[],
    priceRange: 
    {
      minPrice: 0,
      maxPrice: 9999999
    }
  ,
    fetchStatus: true,
    categoryList: [],
    accessoryList: [],
    accessoryCategory: [],
    stringStatus: false,
    categoryStatus: false,
    accessoryStatus: false
}


export const ProductReducer = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state,action) => {
      if(state.category===action.payload){
        state.fetchStatus = false
      }else{
        state.category = action.payload
        state.fetchStatus = true
      }
    },
    SetArray: (state, action)=>{
      state.arrayList= action.payload
      state.originalList= action.payload
      // state.fetchStatus = false
    },
    sortArray:(state, action)=>{
      action.payload?state.originalList.sort((a,b) => a.price.raw - b.price.raw):state.originalList.sort((a,b) =>b.price.raw - a.price.raw)
      if(state.stringStatus){
        let copy = state.originalList.filter((item)=>{
          if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
            return (new RegExp(state.filterString.join('|')).test(item.name))
          }
        })
        state.arrayList=copy
      }else if(state.categoryStatus){
        let copy = state.originalList.filter((item)=>{
          if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
            return (new RegExp(state.categoryList.join('|')).test(item.categories.map((itemm)=>{return itemm.slug})))
          }
        })
        state.arrayList=copy
      }else if(state.accessoryStatus){
        let copy = state.originalList.filter((item)=>{
          if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
            return (new RegExp(state.accessoryList.join('|')).test(item.name))
          }
        })
        state.arrayList=copy
        let copyList = state.arrayList.filter((item)=>{
          if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
            return (new RegExp(state.accessoryCategory.join('|')).test(item.categories.map((itemm)=>{return itemm.name})))
          }
        })
        state.arrayList=copyList
      }
    },
    returnDefaultSort:(state)=>{
      state.arrayList.sort((a,b) => a.updated - b.updated)
    },
    filterString:(state,action)=>{
      state.filterString=[...state.filterString, action.payload]
      let copy = state.originalList.filter((item)=>{
        if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
          return (new RegExp(state.filterString.join('|')).test(item.name))
        }
      })
      state.arrayList=copy
      
    },
    deleteString:(state, action)=>{
      let filteredArray = state.filterString.filter(e => e !== action.payload)
      state.filterString=filteredArray

        let copy = state.originalList.filter((item)=>{
          if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
            return (new RegExp(state.filterString.join('|')).test(item.name))
          }
        })
        state.arrayList=copy
      
    },
    filterPrice:(state, action)=>{
      state.priceRange=[]
      state.priceRange = action.payload
      if(state.stringStatus){
        let copy = state.originalList.filter((item)=>{
          if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
            return (new RegExp(state.filterString.join('|')).test(item.name))
          }
        })
        state.arrayList=copy
      }else if(state.categoryStatus){
        let copy = state.originalList.filter((item)=>{
          if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
            return (new RegExp(state.categoryList.join('|')).test(item.categories.map((itemm)=>{return itemm.slug})))
          }
        })
        state.arrayList=copy
      }else if(state.accessoryStatus){
        let copy = state.originalList.filter((item)=>{
          if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
            return (new RegExp(state.accessoryList.join('|')).test(item.name))
          }
        })
        state.arrayList=copy
        let copyList = state.arrayList.filter((item)=>{
          if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
            return (new RegExp(state.accessoryCategory.join('|')).test(item.categories.map((itemm)=>{return itemm.name})))
          }
        })
        state.arrayList=copyList
      }
    },
    localData: (state,action) => {
      state.LocalList = [...state.LocalList, action.payload]
    },
    setCategoryList: (state,action) => {
      state.categoryList = [...state.categoryList, action.payload]
      let copy = state.originalList.filter((item)=>{
        if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
          return (new RegExp(state.categoryList.join('|')).test(item.categories.map((itemm)=>{return itemm.slug})))
        }
      })
      state.arrayList=copy

    },
    deleteCategoryList: (state,action) => {
      let filteredArray = state.categoryList.filter(e => e !== action.payload)
      state.categoryList=filteredArray
      let copy = state.originalList.filter((item)=>{
        if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
        return (new RegExp(state.categoryList.join('|')).test(item.categories.map((itemm)=>{return itemm.slug})))
        }
    })
    state.arrayList=copy
    },
    setAccessoryList: (state,action) => {
      state.accessoryList = [...state.accessoryList, action.payload]
      let copy = state.originalList.filter((item)=>{
        if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
          return (
            new RegExp(state.accessoryList.join('|')).test(item.name)
          )
        }
      })
      state.arrayList=copy
      let copyList = state.arrayList.filter((item)=>{
        if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
          return (new RegExp(state.accessoryCategory.join('|')).test(item.categories.map((itemm)=>{return itemm.name})))
        }
      })
      state.arrayList=copyList

    },
    deleteAccessoryList: (state,action) => {
      let filteredArray = state.accessoryList.filter(e => e !== action.payload)
      state.accessoryList=filteredArray
      let copy = state.originalList.filter((item)=>{
        if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
          return (new RegExp(state.accessoryList.join('|')).test(item.name))
        }
    })
    state.arrayList=copy
    let copyList = state.arrayList.filter((item)=>{
      if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
        return (new RegExp(state.accessoryCategory.join('|')).test(item.categories.map((itemm)=>{return itemm.name})))
      }
    })
    state.arrayList=copyList
    },
    setAccessoryCategory: (state,action) => {
      state.accessoryCategory = [...state.accessoryCategory, action.payload]
      let copy = state.originalList.filter((item)=>{
        if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
          return (new RegExp(state.accessoryCategory.join('|')).test(item.categories.map((itemm)=>{return itemm.name})))
        }
      })
      state.arrayList=copy
      let copyList = state.arrayList.filter((item)=>{
        if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
          return (
            new RegExp(state.accessoryList.join('|')).test(item.name)
          )
        }
      })
      state.arrayList=copyList
    },
    deleteAccessoryCategory: (state,action) => {
      let filteredArray = state.accessoryCategory.filter(e => e !== action.payload)
      state.accessoryCategory=filteredArray
      let copy = state.originalList.filter((item)=>{
        if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
          return (new RegExp(state.accessoryCategory.join('|')).test(item.categories.map((itemm)=>{return itemm.name})))
        }
      })
      state.arrayList=copy
      let copyList = state.arrayList.filter((item)=>{
        if(state.priceRange.minPrice<item.price.raw && state.priceRange.maxPrice>item.price.raw){
          return (
            new RegExp(state.accessoryList.join('|')).test(item.name)
          )
        }
      })
      state.arrayList=copyList
    },

    setStringStatus:(state,action)=> {
      state.stringStatus = action.payload
    },
    setCategoryStatus:(state,action)=> {
      state.categoryStatus = action.payload
    },
    setAccessoryStatus: (state,action) => {
      state.accessoryStatus = action.payload
    },
    resetList: (state, action)=>{
      state.filterString = action.payload
      state.categoryList = action.payload
      state.accessoryList = action.payload
      state.accessoryCategory = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {setCategory, SetArray, sortArray, returnDefaultSort, deleteString, filterString,localData, filterPrice, setCategoryList, deleteCategoryList, setStringStatus, setCategoryStatus, setAccessoryStatus, setAccessoryList, deleteAccessoryList, setAccessoryCategory, deleteAccessoryCategory, resetList} = ProductReducer.actions

export default ProductReducer.reducer