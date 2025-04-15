import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./users.slice";
import postsSlice from "./posts.slice";
import commentsSlice from "./comments.slice";

const reducers = combineReducers({
    users: userSlice,
    posts: postsSlice,
    comments: commentsSlice
});

export default reducers;