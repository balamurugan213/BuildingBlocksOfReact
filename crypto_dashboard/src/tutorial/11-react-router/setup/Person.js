import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const {id} =useParams()
  const [name,setName]=useState('default value')
  useEffect(()=>{
    const newp=data.find((person)=>person.id===parseInt(id));
    setName(newp.name)
  },[])
  return (
    <div>
      <h2>{name}</h2>
      <Link to='/people' className='btn'>Back to people</Link>
    </div>
  );
};

export default Person;
