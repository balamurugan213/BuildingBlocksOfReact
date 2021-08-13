import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPrerson]=useState(
    {
      name:'thomes',
      age:44,
      message:'Random message'
    }
  );
  const changeMessage =()=>{
    setPrerson({...person,message:"By the Order of Fucking Peaky Blinders"})
  }

  return (
  <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h3>{person.message}</h3>
    <button className='btn' onClick={changeMessage}>Change Message</button>
  </>
  );
};

export default UseStateObject;
