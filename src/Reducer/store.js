import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "./ProductReducer"
import FilterReducer from './FilterReducer'
import ProductInsideIDReducer from "./ProductInsideIDReducer"

export const store = configureStore({
  reducer: {
      category: ProductReducer,
      filter: FilterReducer,
      setProductID: ProductInsideIDReducer
  },
})