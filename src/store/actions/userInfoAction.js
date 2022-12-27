import {SET_FIRSTNAME, SET_LASTNAME} from "../types/userInfoType";

export const onChangeFirstName = (value) => {
    return {
        type: SET_FIRSTNAME,
        payload: value
    }
}

export const onChangeLastName = (value) => {
    return {
        type: SET_LASTNAME,
        payload: value
    }
}
