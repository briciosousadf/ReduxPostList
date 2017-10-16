import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li><Link to = '/home'>Home</Link></li>
               <li><Link to = '/about'>About</Link></li>
               <li><Link to = '/contact'>Contact</Link></li>
            </ul>
				
           {this.props.children}
         </div>
      )
   }
}

export const Home = () =>
<div>
  <App />
  <h1>Home...</h1>
</div>
;

export const About = () =>
  <div>
    <App />
    <h1>About...</h1>
  </div>
;

export const Contact = () =>
<div>
  <App />
  <h1>Contact...</h1>
</div>
;

export default App;