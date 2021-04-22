import React from 'react';
import ReactDOM from 'react-dom';

// CSS 
import './index.css';

const book=[
  {
    id:1,
   img:'https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg',
   title:'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
   author:'James Clear'
  },
  {
    id:2,
    img:'https://images-na.ssl-images-amazon.com/images/I/51NpGEKBQoL._SX361_BO1,204,203,200_.jpg',
    title:'The Cat in the Hat',
    author:'Dr. Seuss '
  }
]


const BookList =() =>{
  return (
    <section className="bookList">
       {book.map((b)=>{
          return <Book key={b.id} b={b}></Book>
         })}
    </section>
    );
}
const Book =(props) => {
  return(
    <article className='book'>
       <img src={props.b.img} alt=""/>
       <h2>{props.b.title}</h2>
       <p>{props.b.author}</p>
    </article>
  );
}


ReactDOM.render(
  <BookList/>,
  document.getElementById('root')
);
