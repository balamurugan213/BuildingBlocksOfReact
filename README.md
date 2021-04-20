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
