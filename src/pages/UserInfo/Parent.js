import React from "react";
import {useDispatch} from "react-redux";

import ChildA from "./ChildA";
import {setFirstName, setLastName} from "../../store/reducers/userInfoSlice";

function Parent() {
    const dispatch = useDispatch();
    const onSetFirstName = (e) => {
        dispatch(setFirstName(e.target.value))
    }

    const onSetLastName = (e) => {
        dispatch(setLastName(e.target.value))
    }

    return (
        <>
            <div>This is a Parent component</div>
            <br />

            <form>
                <input placeholder="first name" onChange={onSetFirstName} />
                <input placeholder="last name" onChange={onSetLastName} />
            </form>

            <br />
            <ChildA />
        </>
    );
}

export default Parent;
