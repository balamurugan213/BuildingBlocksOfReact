import React from 'react';

const Book =(props) => {
    const clickHandler=()=>{
      console.log("working");
    }
    return(
      <article className='book'>
         <img src={props.b.img} alt=""/>
         <h2>{props.b.title}</h2>
         <p>{props.b.author}</p>
         <button type='button' onClick={clickHandler}>Edit</button>
      </article>
    );
  }
 
export default Book;