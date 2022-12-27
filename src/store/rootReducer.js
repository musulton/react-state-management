import {combineReducers} from "redux";
import counterReducer from "./reducers/counterReducer";
import userInfoReducer from "./reducers/userInfoReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    userInfo: userInfoReducer
})

export default rootReducer;
