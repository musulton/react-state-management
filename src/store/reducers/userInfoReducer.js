import {SET_LASTNAME, SET_FIRSTNAME} from "../types/userInfoType";

const initialState = {
    firstname: "firstname",
    lastname: "lastname"
}

const userInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FIRSTNAME:
            return {
                ...state,
                firstname: action.payload
            }
        case SET_LASTNAME:
            return {
                ...state,
                lastname: action.payload
            }
        default:
            return state
    }
}

export default userInfoReducer;
