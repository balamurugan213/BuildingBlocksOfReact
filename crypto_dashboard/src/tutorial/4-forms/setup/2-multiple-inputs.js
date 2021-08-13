import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('');
  // const [email, setEmail] = useState('');
  // const [age, setAge] = useState('');
  const [person, setPerson] = useState({firstName:'',email:'',age:''});

  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email) {
      const pers = {...person,id: new Date().getTime().toString(), };
      // console.log(person);
      setPeople((people) => {
        return [...people, pers];
      });
      setPerson({firstName:'',email:'',age:''})
    } else {
      console.log('empty values');
    }
  };

  const handleChange=(e)=>{
    const name=e.target.name;
    const value= e.target.value;
    setPerson({...person,[name]:value})
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
