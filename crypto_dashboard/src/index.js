import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Book from './book'
import {books} from './bookdb'


const BookList =() =>{
  return (
    <section className="bookList">
       {books.map((b)=>{
          return <Book key={b.id} b={b}></Book>
         })}
    </section>
    );
}


ReactDOM.render(
  <BookList/>,
  document.getElementById('root')
);
