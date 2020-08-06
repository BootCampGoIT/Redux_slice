import { configureStore } from '@reduxjs/toolkit';
// import postReducer from './posts/postReducer';
import postsSlice from '../slices/postsSlice';
import usersReducer from './users/usersReducer';

const store = configureStore({ 
    reducer: {
        posts: postsSlice, 
        users: usersReducer}
})

export default store;

