import React from 'react';

export default function Car(props) {
    const recieve = props.handleX;
    console.log(recieve);
    recieve('Xe hoi nay len gia roi!!!');
    return (
        <>
            <div>Brand {props.brand},<br />Price {props.price}</div>
        </>
    );
}
