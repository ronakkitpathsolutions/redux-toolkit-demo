import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../api/client";

const initialState = {
  users: {
    isLoading: false,
    data: [],
    pagination: {
      page: 1,
      limit: 10,
    },
  },
  user: {
    isLoading: false,
    data: {},
  },
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.USERS.getAll(data);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,  
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.users.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users.isLoading = false;
        state.users.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        if (axios.isCancel(action.payload)) {
          return;
        }
        state.users.isLoading = false;
      });
  },
});

// export const {  } = usersSlice.actions;

export default usersSlice.reducer;
