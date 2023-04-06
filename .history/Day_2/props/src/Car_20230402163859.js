import React from 'react';

export default function Car(props) {
    const sendBack = (value) => {
        console.log()
    }
    return (
        <>
            <Car brand="Lambogini" price="$5000" />
            <Car brand="BMW" price="$20000" />
        </>
    );
}
