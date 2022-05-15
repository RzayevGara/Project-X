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
// export const store = configureStore({
//   reducer: {
//       category: ProductReducer,
//       filter: FilterReducer,
//       setProductID: ProductInsideIDReducer
//   },
// })

import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
      category: ProductReducer,
      filter: FilterReducer,
      setProductDetail: ProductInsideDetail,
      AddToCard: AddCardReducer,
      listOrder: CardListReducer,
      setHamburger: HamburgerReducer,
      homeList: HomePageReducer,
      login: LoginReducer,
      checkout: CheckoutReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['']
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});