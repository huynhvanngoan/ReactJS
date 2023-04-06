import React from 'react';

export default function Car(props) {
    const handleX = props.handleX;
    
    return (
        <>
            <div>Brand {props.brand},<br />Price {props.price}</div>
        </>
    );
}
