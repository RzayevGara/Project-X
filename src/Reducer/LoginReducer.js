import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    token: "",
    email: "",
    signStatus: 20,
    loginStatus: ""
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
    setLoginStatus: (state,action) => {
        state.loginStatus = action.payload
    },
    setSignStatus: (state,action) => {
      state.signStatus = action.payload
    }
}
})

// Action creators are generated for each case reducer function
export const {setToken, setEmail, setSignStatus, setLoginStatus} = LoginReducer.actions

export default LoginReducer.reducer