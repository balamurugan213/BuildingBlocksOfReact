import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from './reducer';
// reducer function
// const reducer =(state,action)=>{
//   if(action.type==='ADD_ITEM')
 
//   {
//      const newItem=[...state.people,action.payload]
//     return {...state,people:newItem,isModelOpen:true,modalContent:'item added'}
//   }
//   if(action.type==='NO_VALUE'){
//     return {...state,isModelOpen:true,modalContent:'Please enter a value'}
//   }
//   if(action.type==='CLOSE_MODAL'){
//     return {...state,isModelOpen:false};
//   }
//   if(action.type==='REMOVE_ITEM'){
//     const newPeople =state.people.filter((pers)=>pers.id !==action.payload)
//     return {...state,people:newPeople}
//   }
//   throw new Error("no action matching");
 
// }
const defaultState={
  people:[],
  isModelOpen:true,
  modalContent:''
}

const Index = () => {
  const [name,setName]=useState('');
  const [state,dispatch]=useReducer(reducer,defaultState);
  // const [people,setPeople]=useState(data);
  // const [showModal,setShowModal]=useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name)
    {
      const newItem={id:new Date().getTime().toString(),name}
      dispatch({type:'ADD_ITEM',payload:newItem})
      setName('')
    }
    else{
      dispatch({type:'NO_VALUE'})
    }
  }
  const closeModal=()=>{
    dispatch({type:'CLOSE_MODAL'})
  }
  return <>
  {state.isModelOpen && <Modal modalContent={state.modalContent}closeModal={closeModal} ></Modal>}
  <form onSubmit={handleSubmit} className='form'>
    <div className="">
      <input type="text" name="" id="" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <button type='submit'>Add</button>
  </form>
  {state.people.map((person)=>{
    return(
      <div key={person.id} className='item' >
        <h4>{person.name}</h4>
        <button onClick={()=>dispatch({type:'REMOVE_ITEM',payload:person.id})}>Remove</button>
      </div>
    )
  })}
  </>;
};

export default Index;
