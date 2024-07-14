import { configureStore } from '@reduxjs/toolkit'
import { aiResumeApi } from './APIs/resume'

export const store = configureStore({
  reducer: {
    [aiResumeApi.reducerPath]: aiResumeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aiResumeApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch