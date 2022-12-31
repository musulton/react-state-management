import React from "react";
import CounterOutput from "./components/CounterOutput";
import CounterControl from "./components/CounterControl";

import {useDispatch} from "react-redux";
import {increment, decrement} from "../../store/reducers/counterSlice";

const CounterDisplay = () => {
    const dispatch = useDispatch();
    return (
        <>
            <CounterOutput />
            <CounterControl label="Increment" onClick={() => dispatch(increment())} />
            <CounterControl label="Decrement" onClick={() => dispatch(decrement())} />
        </>
    )
}

export default CounterDisplay;
