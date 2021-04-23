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
