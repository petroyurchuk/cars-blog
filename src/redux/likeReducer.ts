import { createSlice } from '@reduxjs/toolkit'

interface Like {
    [id: number]: boolean
}
const initialState: Like = {}

export const likeSlice = createSlice({
    name: 'like',
    initialState,
    reducers: {
        toggleLike: (state, action) => ({
            ...state,
            [action.payload]: !state[action.payload],
        }),
    },
})

export const { toggleLike } = likeSlice.actions
export default likeSlice.reducer
