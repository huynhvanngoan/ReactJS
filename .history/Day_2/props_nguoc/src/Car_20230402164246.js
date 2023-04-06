import React from 'react';

export default function Car(props) {
    const reciev = props.handleX;

    return (
        <>
            <div>Brand {props.brand},<br />Price {props.price}</div>
        </>
    );
}
