import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    searchList: [],
    searchParams: [],
    filteredArray: [],
    searchStatus: false
}


export const SearchReducer = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchList: (state,action) => {
      state.searchList = action.payload
    },
    setSearchParams: (state,action) => {
        state.searchParams=[]
        if(action.payload!==""){
            state.searchParams.push(action.payload.toLowerCase())
        }else{
            state.filteredArray = []
        }
    },
    setSearchStatus: (state,action) => {
        state.searchStatus=action.payload
    },
    setFilteredArray: (state,action) => {
        state.filteredArray=action.payload
    }
}
})

// Action creators are generated for each case reducer function
export const {setSearchList, setSearchParams,setSearchStatus, setFilteredArray} = SearchReducer.actions

export default SearchReducer.reducer