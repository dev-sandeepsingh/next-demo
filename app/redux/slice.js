'use client';
const {createSlice, nanoid} = require("@reduxjs/toolkit");

const initialState = {
    users: [],
}
const Slice = createSlice({
    name: "addUserSlice",
    initialState,
    reducers:{
        addUser: (state, action) => {
            state.users.push({
                id: nanoid(),
                name: action.payload,
            });
        },
        removeUser: (state, action) => {
            state.users = state.users.filter((user) => user.id !== action.payload);
        }
    }
});

export const {addUser, removeUser} = Slice.actions;
export default Slice.reducer;

