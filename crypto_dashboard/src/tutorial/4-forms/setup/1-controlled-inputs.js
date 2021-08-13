import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName,setFirstName]=useState('');
  const [email,setEmail]=useState('');
  const [people,setPeople]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("heee")
    if(firstName && email){
      const p={id:new Date().getTime().toString(),firstName,email}
      setPeople((old)=>{
        return[...old,p];
      })
    }
    setEmail('');
    setFirstName('');
  }
  return <>
  <article>
    <form onSubmit={handleSubmit} className='form'>
      <div className="form-control">
        <label htmlFor="firstName">Name:</label>
        <input type="text" id='firstName' name='firstName' onChange={(e)=>setFirstName(e.target.value)} value={firstName} />
      </div>
      <div className="form-control">
        <label htmlFor="email">Email:</label>
        <input type="text" id='email' value={email} onChange={(e)=>setEmail(e.target.value)} name='email' />
      </div>
      <button type='submit'> Add preson</button>
    </form>
    {
      people.map((person,index)=>{
        const {id,firstName,email}=person
        return <div id={id} className="item">
          <h4>{firstName}</h4>
          <p>{email}</p>
        </div>
      })
    }
  </article>
  </>;
};

export default ControlledInputs;
