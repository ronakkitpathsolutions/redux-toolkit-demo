import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../api/client";

const initialState = {
  comments: {
    isLoading: false,
    data: [],
    pagination: {
      page: 1,
      limit: 10,
    },
  },
  comment: {
    isLoading: false,
    data: {},
  },
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.COMMENTS.getAll(data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.comments.isLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.comments.isLoading = false;
        state.comments.data = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        if (axios.isCancel(action.payload)) {
          return;
        }
        state.comments.isLoading = false;
      });
  },
});
// export const {  } = commentsSlice.actions;
export default commentsSlice.reducer;