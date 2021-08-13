import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText]=useState('');
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return <>
  <h1>{text || "Empty"}</h1>
  {text && <h1>Is Available</h1>}
  <button className="btn" onClick={()=>setText('Auther')}>Check Again</button>
  </>;
};

export default ShortCircuit;
