import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import counterReducer from '../redux/features/counter/counter-slice'
import { userApi } from './features/user/user-api'

export const store = configureStore({
  reducer: {
    counter: counterReducer,

    [userApi.reducerPath]: userApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)