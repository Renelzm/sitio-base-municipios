import { configureStore } from '@reduxjs/toolkit'
import {municipalSlice} from './slices/municipalSlice.ts'
import {tramitesSlice} from './slices/tramitesSlice'
import { noticiasSlice } from './slices/noticiasSlice'

// Redux store

export const store = configureStore({
  reducer: {
    municipal: municipalSlice.reducer,
    tramites: tramitesSlice.reducer,
    noticias: noticiasSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch