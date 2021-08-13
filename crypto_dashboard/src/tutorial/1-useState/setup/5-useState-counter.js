import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue]=useState(0);
  const callIncrease=()=>{
    setTimeout(()=>{setValue((previousState)=>{
      return previousState + 1;
    })},2000)
  }
  return( <>
  <section style={{margin:'4rem 0'}}>
    <h2>Regular Countert</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>setValue(value+1)}>Increase</button>
    <button className='btn' onClick={()=>setValue(0)}>Reset</button>
    <button className='btn' onClick={()=>setValue(value-1)}>Decrease</button>
  </section>
  <section style={{margin:'4rem 0'}}>
    <h2>Complex Countert</h2>
    <h1>{value}</h1>
    <button className='btn' onClick={()=>callIncrease()}>Increase</button>
    {/* <button className='btn' onClick={()=>setValue(0)}>Reset</button> */}
    {/* <button className='btn' onClick={()=>setValue(value-1)}>Decrease</button> */}
  </section>
  </>);
};

export default UseStateCounter;
