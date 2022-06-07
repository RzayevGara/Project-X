import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    searchList: [],
    searchParams: [],
    filteredArray: []
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
            let copy = state.searchList.filter((item) =>{
                return (new RegExp(state.searchParams.join('|')).test(item.name.toLowerCase()))
            })
            state.filteredArray = copy
        }else{
            state.filteredArray = []
        }
    }
}
})

// Action creators are generated for each case reducer function
export const {setSearchList, setSearchParams} = SearchReducer.actions

export default SearchReducer.reducer