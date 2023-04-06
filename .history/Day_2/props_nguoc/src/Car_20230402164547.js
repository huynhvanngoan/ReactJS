import React from 'react';

export default function Car(props) {
    const recieve = props.handleX;
    console.log(recieve);
    require('')
    return (
        <>
            <div>Brand {props.brand},<br />Price {props.price}</div>
        </>
    );
}
