import { configureStore } from '@reduxjs/toolkit'
import * as reducers from "./reducers";

const store = configureStore({
  reducer: {
    pokemon: reducers.counterReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export {
    reducers
}

export default store;