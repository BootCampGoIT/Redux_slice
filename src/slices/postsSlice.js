import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: "posts",
    initialState: { posts: [], filter: '' },
    reducers: {
        addNewPost: (state, action) => ({ ...state, posts: [...state.posts, action.payload] }),
        deletePost: (state, action) => ({ ...state, posts: [...state.posts.filter(post => post.id !== action.payload)] }),
        getFilterValue: (state, action) => ({ ...state, filter: action.payload }),
    }
})
export const { addNewPost, deletePost, getFilterValue } = postSlice.actions;
export default postSlice.reducer;