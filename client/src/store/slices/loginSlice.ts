import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCurrentUser = createAsyncThunk('auth/fetchCurrentUser', async () => {
      const response = await axios.get('/api/current_user', { withCredentials: true }); // Replace with your API endpoint
      return response.data;
  });

// Define the initial state for the slice
const initialState = {
  userId: '',
  userName: '',
  userLoggedIn: false
};

// Create a slice
const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logoutUser: () => {
        return {
            userId: '',
            userName: '',
            userLoggedIn: false
        }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.userId = action.payload.googleID;
        state.userName = action.payload.name;
        state.userLoggedIn = action.payload.googleID? true : false;
      })
  },
});

// Export the reducer and actions
export const { logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
