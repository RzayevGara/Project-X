import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "./ProductReducer"
import FilterReducer from './FilterReducer'

export const store = configureStore({
  reducer: {
      category: ProductReducer,
      filter: FilterReducer
  },
})