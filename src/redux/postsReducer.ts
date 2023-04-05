import { createSlice } from '@reduxjs/toolkit'
import { postsArray, PropsPosts } from 'utils/postsArray'

const initialState: {
    posts: PropsPosts[]
    filteredPosts: PropsPosts[]
} = {
    posts: postsArray,
    filteredPosts: postsArray,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        handleSearchFilter: (state, action) => {
            state.filteredPosts = state.posts.filter(({ title }) =>
                title.toLocaleLowerCase().includes(action.payload.title)
            )
        },
    },
})
export const { handleSearchFilter } = postsSlice.actions
export default postsSlice.reducer
