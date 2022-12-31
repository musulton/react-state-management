import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstname: "firstname",
    lastname: "lastname"
}

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstname = action.payload;
        },
        setLastName: (state, action) => {
            state.lastname = action.payload;
        }
    }
})

export const {setFirstName, setLastName} = userInfoSlice.actions;
export default userInfoSlice.reducer;
