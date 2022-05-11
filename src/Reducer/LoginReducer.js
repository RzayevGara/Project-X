import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    token: "",
    email: "",
    customer: {}
}


export const LoginReducer = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setToken: (state,action) => {
      state.token = action.payload
    },
    setEmail: (state,action) => {
        state.email = action.payload
    },
    setCustomer: (state,action) => {
        state.customer = action.payload
    }
}
})

// Action creators are generated for each case reducer function
export const {setToken, setEmail, setCustomer} = LoginReducer.actions

export default LoginReducer.reducer