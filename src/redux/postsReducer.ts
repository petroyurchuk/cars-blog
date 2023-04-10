import { createSlice } from '@reduxjs/toolkit'

import {
    postsArray,
    postsReviewsArray,
    postsTestsArray,
    postsDealsArray,
    PropsPosts,
} from 'utils/postsArray'

const initialState: {
    posts: PropsPosts[]
    filteredPosts: PropsPosts[]
    postsReviews: PropsPosts[]
    filteredReviewsPosts: PropsPosts[]
    filteredTestsPosts: PropsPosts[]
    postsTests: PropsPosts[]
    filteredDealsPosts: PropsPosts[]
    postsDeals: PropsPosts[]
} = {
    posts: postsArray,
    filteredPosts: postsArray,
    postsReviews: postsReviewsArray,
    filteredReviewsPosts: postsReviewsArray,
    filteredTestsPosts: postsTestsArray,
    postsTests: postsTestsArray,
    filteredDealsPosts: postsDealsArray,
    postsDeals: postsDealsArray,
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        handleSearchFilter: (state, action) => {
            if (action.payload.sortPage === 'carsPage') {
                state.filteredPosts = state.posts.filter(({ title }) =>
                    title.toLowerCase().includes(action.payload.title)
                )
            }
            if (action.payload.sortPage === 'reviewsPage') {
                state.filteredReviewsPosts = state.postsReviews.filter(
                    ({ title }) =>
                        title.toLowerCase().includes(action.payload.title)
                )
            }
            if (action.payload.sortPage === 'testsPage') {
                state.filteredTestsPosts = state.postsTests.filter(
                    ({ title }) =>
                        title.toLowerCase().includes(action.payload.title)
                )
            }
            if (action.payload.sortPage === 'dealsPage') {
                state.filteredDealsPosts = state.postsDeals.filter(
                    ({ title }) =>
                        title.toLowerCase().includes(action.payload.title)
                )
            }
        },
    },
})
export const { handleSearchFilter } = postsSlice.actions
export default postsSlice.reducer
