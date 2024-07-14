import { configureStore } from '@reduxjs/toolkit'
import { aiResumeApi } from './APIs/resume'
import ResumeReducer from './Features/Resume/Slice'

export const store = configureStore({
  reducer: {
    resume: ResumeReducer,
    [aiResumeApi.reducerPath]: aiResumeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(aiResumeApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch