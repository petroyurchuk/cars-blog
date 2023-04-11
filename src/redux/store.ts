import { configureStore } from '@reduxjs/toolkit'
import likeReducer from './likeReducer'
import postsReducer from './postsReducer'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        like: likeReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
