import { createSlice, configureStore } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        logUser: (state, action) => {
            var payload = action.payload;
            if (payload.id && payload.firstName && payload.lastName && payload.email && payload.token) {
                state.userId = payload.id;
                state.firstName = payload.firstName;
                state.lastName = payload.lastName;
                state.email = payload.email;
                state.token = payload.token;
            }
        },
        logoutUser: (state, action) => {
                state = {};
                return state;
        },
        editUser: (state, action) => {
            var payload = action.payload;
            if (payload.firstName && payload.lastName) {
                state.firstName = payload.firstName;
                state.lastName = payload.lastName;
            }
        }
    }
});

export const { logUser, logoutUser, editUser } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});