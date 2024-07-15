// Importing the createSlice function from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the authentication slice
const initialState = {
    status: false,  // Tracks if the user is logged in (true) or logged out (false)
    userData: null  // Stores the data of the logged-in user, initially null
}

// Creating a slice for authentication state management
const authSlice = createSlice({
    name: "auth",  // Name of the slice
    initialState,  // Initial state defined above
    reducers: {
        // Reducer function for logging in
        login: (state, action) => {
            state.status = true;  // Set status to true indicating the user is logged in
            state.userData = action.payload.userData;  // Set userData to the payload's userData
        },
        // Reducer function for logging out
        logout: (state) => {
            state.status = false;  // Set status to false indicating the user is logged out
            state.userData = null;  // Reset userData to null
        }
    }
})

// Exporting the login and logout action creators
export const { login, logout } = authSlice.actions;

// Exporting the reducer to be used in the Redux store
export default authSlice.reducer;
