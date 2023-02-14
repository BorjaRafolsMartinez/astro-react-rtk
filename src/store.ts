
import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import {
  apiService
} from './services/apiService'

export const rootReducer = combineReducers({
  [apiService.reducerPath]: apiService.reducer
})

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware),
  reducer: rootReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
