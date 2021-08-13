import React, { useState } from 'react';

const UseStateBasics = () => {
  const [title,setTitle]=useState("Random Text");
  const clickHandler=()=>{
    if(title ==='Random Text'){
      setTitle("Hello World")
    }
    else{
      setTitle('Random Text')
    }
    
  }

  return(
    <React.Fragment>
      <h1>{title}</h1>
      <button className='btn' onClick={clickHandler}>Change Text</button>
    </React.Fragment> 
  );
};

export default UseStateBasics;
