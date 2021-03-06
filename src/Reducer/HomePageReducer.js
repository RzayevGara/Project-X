import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    phoneList: [],
    loadingPhone: true,
    accessoryList: [],
    loadingAccessory: true,
    fetchProduct: true,
    menuCategories: ""
}


export const HomePageReducer = createSlice({
  name: 'homeList',
  initialState,
  reducers: {
    setPhoneList: (state,action) => {
      state.phoneList = action.payload
      state.loadingPhone = false
    },
    setAccessoryList: (state,action) => {
      state.accessoryList = action.payload
      state.loadingAccessory = false
    },
    setFetchStatus: (state,action)=>{
      state.fetchProduct = action.payload
    },
    setMenuCategories: (state,action)=>{
      state.menuCategories = action.payload
    },

}
})

// Action creators are generated for each case reducer function
export const {setPhoneList, setAccessoryList, setFetchStatus, setMenuCategories} = HomePageReducer.actions

export default HomePageReducer.reducer