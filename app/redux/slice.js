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
        }
    }
});

export const {addUser} = Slice.actions;
export default Slice.reducer;

