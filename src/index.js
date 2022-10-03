import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Welcome(props) {
  return <h1>Hello, {props.cool}. {props.age} years.</h1>
}
const element = <Welcome cool="Olamide" age="20" />;

root.render(element);

// const name = 'Olamide'
// const embeddedElement = <h1>Hello, {name}</h1>

// function formatName(user) {
//   let name = ""
//   for (let i = 0; i < 10; i++)
//   {
//     name += user.firstName + ' ' + user.lastName + " ";
//   }
//   return name;
// }

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName + " ";
// }


// const user = {
//   firstName: 'Olamide',
//   lastName: 'Kumapayi'
// };

// const functionalElement = (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// function tick() {
//   const x = (
//     <div>
//       <h1> Hello, {formatName(user)}!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   )
//   root.render(x);
// }
// setInterval(tick, 1000);
//root.render(functionalElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
