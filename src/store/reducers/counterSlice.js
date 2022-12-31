import {createSlice} from "@reduxjs/toolkit";

const initState = {
    counter: 0
};
export const counterSlice = createSlice({
    name: "counter",
    initialState: initState,
    reducers: {
        increment: (state, action) => {
            state.counter++
        },
        decrement: (state, action) => {
           state.counter--
        }
    }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
