import React from "react";
import {useDispatch} from "react-redux";

import ChildA from "./ChildA";
import {onChangeFirstName, onChangeLastName} from "../../store/actions/userInfoAction";

function Parent() {
    const dispatch = useDispatch();
    const onSetFirstName = (e) => {
        dispatch(onChangeFirstName(e.target.value))
    }

    const onSetLastName = (e) => {
        dispatch(onChangeLastName(e.target.value))
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
