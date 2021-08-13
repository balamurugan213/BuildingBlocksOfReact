# Building Blocks Of React

Learning react again with different approach - and in depth.

## What is react

- React is a javascript library created by facebook for frontend(User Interface) development.

- React implements babel (webpack) and JWX to make the front end as component based UI.

- You can implement react on your own from scratch by installing the modules and creating the webpack and etc..

To create Boilerplate template

```cmd
npx create-react-app <APPNAME>
```

## What is Babel?

- Babel is a JavaScript compiler that can translate markup or programming languages into JavaScript.With Babel, you can use the newest features of JavaScript (ES6 - ECMAScript 2015).

- React uses Babel to convert JSX into JavaScript.

## What is JSX?

JSX stands for JavaScript XML.JSX is an XML/HTML like extension to JavaScript.JSX is a XML syntax extension to JavaScript that also comes with the full power of ES6 (ECMAScript 2015).

Just like HTML, JSX tags can have a tag names, attributes, and children. If an attribute is wrapped in curly braces, the value is a JavaScript expression.

Always returns a single element(must be wrap with enclosing tab).

- Fragement element

-- <></>

-- <React.Fragement>

-- To write javascript code in jsx we use {} and write in it.But we can't write expression.

## React DOM Render

The method ReactDom.render() is used to render (display) HTML elements:To display the specified HTML code inside the specified HTML element.

The ReactDOM.render() function takes two arguments, HTML code and an HTML element.

```js
<div id="id01">Hello World!</div>

<script type="text/babel">
ReactDOM.render(
    <h1>Hello React!</h1>,
    document.getElementById('id01'));
</script>
```

## Attributes

React has different name for implement a function or properties like

- onclick -->onClick

- class --> className

## Components

```js
const BookList =() =>{
  return (
    <section className="bookList">
       <Book/>
       <Book/>
    </section>
    );
}
const Book =() => {
  return(
    <article className='book'>
      <Image/>
      <Title/>
      <Author></Author>
    </article>
  );
}

const Image=()=>{
  return(
    <img src="https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg" alt=""/>
  )
}

const Title=()=>{
  return(
    <h2>Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</h2>
  )
}

const Author=()=>{
  return(
    <p> James Clear </p>
  )
}

ReactDOM.render(
  <BookList/>,
  document.getElementById('root')
);
```

## Props

Props are arguments passed into React components.Props are passed to components via HTML attributes.

The component receives the argument as a props object.

```js
const book1={
   img:'https://images-na.ssl-images-amazon.com/images/I/91pR9wKJ3zL._AC_UL200_SR200,200_.jpg',
   title:'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
   author:'James Clear'
}
const book2={
  img:'https://images-na.ssl-images-amazon.com/images/I/51NpGEKBQoL._SX361_BO1,204,203,200_.jpg',
  title:'The Cat in the Hat',
  author:'Dr. Seuss '
}

const BookList =() =>{
  return (
    <section className="bookList">
       <Book 
          b={book1}
       />
       <Book 
           b={book2}
       />
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

```

### Alternate

```js
const Book =({img,title,author}) => {
  return(
    <article className='book'>
       <img src={img} alt=""/>
       <h2>{title}</h2>
       <p>{author}</p>
    </article>
  );
}
```

### Children Props

you can use props.children on components that represent ‘generic boxes’ and that ‘don’t know their children ahead of time’.

It is used to display whatever you include between the opening and closing tags when invoking a component.

```js
render () {
  return (
    <div className='container'>
      <Picture key={picture.id} src={picture.src}>
          //what is placed here is passed as props.children  
      </Picture>
    </div>
  )
}

const Picture = (props) => {
  return (
    <div>
      <img src={props.src}/>
      {props.children}
    </div>
  )
}
```

The content will be affected only in the place where you add children props

```js
const BookList =() =>{
  return (
    <section className="bookList">
       <Book 
          b={book1}
       ><h3>sold</h3></Book>
       <Book 
           b={book2}
       />
    </section>
    );
}
const Book =(props) => {
  return(
    <article className='book'>
       <img src={props.b.img} alt=""/>
       <h2>{props.b.title}</h2>
       <p>{props.b.author}</p>
       {props.children}
    </article>
  );
}
```

### Returning a list of components with maps

Lists are very useful when it comes to developing the UI of any website. We can use the map() function for traversing the lists.

A “key” is a special string attribute you need to include when creating lists of elements in React. Keys are used to React to identify which items in the list are changed, updated, or deleted.

In other words, we can say that keys are used to give an identity to the elements in the lists.

```js
const BookList =() =>{
  return (
    <section className="bookList">
       {book.map((b)=>{
          return <Book key={b.id} b={b}></Book>
         })}
    </section>
    );
}
```

## USESTATE

useState is a Hook that allows you to have state variables in functional components.

You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.

liberary:

```js
import React, { useState } from 'react';

const count = useState(initial value,funtionname)

```

The initaial value set the count value initially and functionname can be use to change the value to a different.

## USEEFFETS

With useEffect, you invoke side effects from within functional components, which is an important concept to understand in the React Hooks era. Working with the side effects invoked by the useEffect Hook may seem cumbersome at first, but you’ll eventually learn everything makes a lot of sense.

```js
useEffect(callback[, dependencies]);
```

Example

```js
import { useEffect } from 'react';

function Greet({ name }) {
  const message = `Hello, ${name}!`;   // Calculates output

  useEffect(() => {
    // Good!
    document.title = 'Greetings page'; // Side-effect!
  }, []);

  return <div>{message}</div>;         // Calculates output
}
```

- To Runs at every render

```js
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Runs after EVERY rendering
  });  
}
```

- To runs only once after the initial rendering

```js
import { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    // Runs ONCE after initial rendering
  }, []);
}
```

- To runs only when any depenendecy value changes.

```js
import { useEffect, useState } from 'react';

function MyComponent({ prop }) {
  const [state, setState] = useState('');
  useEffect(() => {
    // Runs ONCE after initial rendering
    // and after every rendering ONLY IF `prop` or `state` changes
  }, [prop, state]);
}
```

## conditional Rendering

- Multiple Renders based of conditions

```js
if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error....</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
```

- short-circuits

```js
// If text is true we print that or if false we print 'john doe' 
<h1>{text || 'john doe'}</h1> 
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      // If iserror is true the second element is executed
      {isError && <h1>Error...</h1>}
      // terinary operator - if condition is true we print first argument else we print second argument   
      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
```

- Problem with useeffets and eventlistner

When the window size is changed which trigger the event listner which call the checksize function which re-render the component which add and trigger the event listner which is a cycle.

To avoid it we remove the listner.

```js
const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);
```

## Forms

```js
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
```

```html
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
```

## USEREF

useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

```js
const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
        </div>
        <button type='submit'>submit</button>
      </form>
    </>
  );
};
```

## UesReducer

useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

```js
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```
