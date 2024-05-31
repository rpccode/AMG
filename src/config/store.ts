import { configureStore } from '@reduxjs/toolkit'
import BudgetSlices from './slices/BudgetSlices'
import ModalSlice from './slices/ModalSlice'
import ExpensseSlice from './slices/ExpensseSlice'
// ...

export const store = configureStore({
  reducer: {
    budget:BudgetSlices,
    modals:ModalSlice,
    expensse:ExpensseSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch