import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [count,setCount]=useState(0)
  useEffect(()=>{
    console.log('call useeffects')
    if(count>= 1){
       document.title=`New message(${count})`
    }
  }, [count]);
  return <>
  <h1>{count}</h1>
  <button className='btn' onClick={()=>setCount(count+1)}>Click Me</button>
  </>;
};

export default UseEffectBasics;
