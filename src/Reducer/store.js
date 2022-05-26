import { configureStore } from '@reduxjs/toolkit'
import ProductReducer from "./ProductReducer"
import FilterReducer from './FilterReducer'
import ProductInsideDetail from "./ProductInsideDetail"
import AddCardReducer from "./AddCardReducer"
import CardListReducer from "./CardListReducer"
import HamburgerReducer from './HamburgerReducer'
import HomePageReducer from './HomePageReducer'
import LoginReducer from './LoginReducer'
import CheckoutReducer from './CheckoutReducer'
import CustomerOrder from './CustomerOrder'


export const store = configureStore({
  reducer: {
    category: ProductReducer,
    filter: FilterReducer,
    setProductDetail: ProductInsideDetail,
    AddToCard: AddCardReducer,
    listOrder: CardListReducer,
    setHamburger: HamburgerReducer,
    homeList: HomePageReducer,
    login: LoginReducer,
    checkout: CheckoutReducer,
    customer: CustomerOrder
  },
})