import React, { useState } from "react";
import {connect} from "react-redux";

import ChildA from "./ChildA";
import {onChangeFirstName, onChangeLastName} from "../../store/actions/userInfoAction";

function Parent(props) {
    const onSetFirstName = (e) => {
        props.onSetFirstName(e.target.value)
    }

    const onSetLastName = (e) => {
        props.onSetLastName(e.target.value)
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

const mapDispatchToProps = (dispatch) => {
    return {
        onSetFirstName: (value) => dispatch(onChangeFirstName(value)),
        onSetLastName: (value) => dispatch(onChangeLastName(value))
    }
}

export default connect(null, mapDispatchToProps)(Parent);
