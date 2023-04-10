import { createSlice } from '@reduxjs/toolkit'

import {
    postsArray,
    postsReviewsArray,
    postsTestsArray,
    postsDealsArray,
    PropsPosts,
    postsLifeArray,
} from 'utils/postsArray'
interface PostsState {
    posts: PropsPosts[]
    filteredPosts: PropsPosts[]
    postsReviews: PropsPosts[]
    filteredReviewsPosts: PropsPosts[]
    filteredTestsPosts: PropsPosts[]
    postsTests: PropsPosts[]
    filteredDealsPosts: PropsPosts[]
    postsDeals: PropsPosts[]
    filteredLifePosts: PropsPosts[]
    postsLife: PropsPosts[]
}
const initialState: PostsState = {
    posts: postsArray,
    filteredPosts: postsArray,
    postsReviews: postsReviewsArray,
    filteredReviewsPosts: postsReviewsArray,
    filteredTestsPosts: postsTestsArray,
    postsTests: postsTestsArray,
    filteredDealsPosts: postsDealsArray,
    postsDeals: postsDealsArray,
    filteredLifePosts: postsLifeArray,
    postsLife: postsLifeArray,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        handleSearchFilter: (state, action) => {
            const { nameOfPosts, nameOfFilteredPosts, title } = action.payload
            const postsToFilter = state[`${nameOfPosts}` as keyof PostsState]
            const filteredPostsKey =
                `${nameOfFilteredPosts}` as keyof PostsState
            console.log(postsToFilter + '\n' + filteredPostsKey)
            state[filteredPostsKey] = postsToFilter.filter(
                ({ title: postTitle }) =>
                    postTitle.toLowerCase().includes(title.toLowerCase())
            )
        },
    },
})
export const { handleSearchFilter } = postsSlice.actions
export default postsSlice.reducer
