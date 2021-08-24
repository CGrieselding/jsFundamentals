// let logo = './logo.svg';
// let logo = require('./logo.svg);
import logo from './logo.svg';

// <link rel='stylesheet' href='./App.css'>
import './App.css';

/*
  TYPE OF NAME CASINGS:
    - camelCasing
    - snake_casing
    - PascalCasing
    - kebab-casing
*/

// FUNCTIONAL COMPONENT
// declare a function [name of component]
// components are typically names with PascalCasing
// component name below: App
function App() {

  // return statement to send back code to display on the webpage
  // returns JSX - this is JavaScript XML, which will run similar to HTML on our webpage once compiled
  return (
    // what is className?
    /* we can't use just 'class' - 'class' is a reserved keyword in JavaScript that will create a class
  constructor, which is why JSX we will use className to assign css classes to our JSX tags. */
    /* a React component can only export one(1) JSX tag. You can have multiple tags INSIDE that one tag
    but... */
    <div className="App">
      {/* NOTE: in order to write JavaScript within a JSX tag pair, we will need to use {} around the
      JavaScript code. This is why a comment within JSX will have {} around the comment. */}
      <header className="App-header">
        {/* we will use {} in order to reference the imported image from the logo file into the image source*/}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

/* this line will export the App() function to be available to other files, and App() will be the default
export, meaning you will not need to specify what you want from this file. */
export default App;
