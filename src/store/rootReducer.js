import counterReducer from "./reducers/counterSlice";
import userInfoReducer from "./reducers/userInfoSlice";

const rootReducer = {
    counter: counterReducer,
    userInfo: userInfoReducer
}

export default rootReducer;
