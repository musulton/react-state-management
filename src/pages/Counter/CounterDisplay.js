import React from "react";
import CounterOutput from "./components/CounterOutput";
import CounterControl from "./components/CounterControl";

import {useDispatch} from "react-redux";
import {onIncrement, onDecrement} from "../../store/actions/counterAction";

const CounterDisplay = () => {
    const dispatch = useDispatch();
    return (
        <>
            <CounterOutput />
            <CounterControl label="Increment" onClick={() => dispatch(onIncrement())} />
            <CounterControl label="Decrement" onClick={() => dispatch(onDecrement())} />
        </>
    )
}

export default CounterDisplay;
