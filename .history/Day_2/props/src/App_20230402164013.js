import React from 'react';
import Car from './Car';

export default function App() {
  const sendBack = (value) => {
    console.log(`Cha nhận data từ con: ${va}`)
  }
  return (
    <>
      <Car brand="Lambogini" price="$5000"/>
      <Car brand="BMW" price="$20000"/>
    </>
  );
}
