import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../api/client";

const initialState = {
    posts: {
        isLoading: false,
        data: [],
        pagination: {
        page: 1,
        limit: 10,
        },
    },
    post: {
        isLoading: false,
        data: {},
    },
}

export const fetchPosts = createAsyncThunk(
    "posts/fetchPosts",
    async (data, { rejectWithValue }) => {
        try {
            const response = await api.POSTS.getAll(data);
            return response;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.posts.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts.isLoading = false;
                state.posts.data = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                if (axios.isCancel(action.payload)) {
                    return;
                }
                state.posts.isLoading = false;
            });
    },
})

// export const {  } = postsSlice.actions;
export default postsSlice.reducer;