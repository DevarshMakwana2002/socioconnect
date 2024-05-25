// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const fetchUserById = createAsyncThunk(
//   "users/fetchByIdStatus",
//   async (userId: number, thunkAPI) => {
//     const response = await userAPI.fetchById(userId);
//     return response.data;
//   }
// );

// const initialState = {};

// const usersSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     fetchUserById:
//   
//   extraReducers: (builder) => {
//     // Add reducers for additional action types here, and handle loading state as needed
//     builder.addCase(fetchUserById.fulfilled, (state, action) => {
//       state.entities.push(action.payload);
//     });
//   },
// });
