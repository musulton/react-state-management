import {DECREMENT, INCREMENT} from "../types/counterType";

export const onIncrement = () => {
    return {
        type: INCREMENT,
        value: 1
    }
}

export const onDecrement = () => {
    return {
        type: DECREMENT,
        value: 1
    }
}
