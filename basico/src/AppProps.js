import React from 'react';
import ReactDOM from 'react-dom';



export default function Bemvindo(props){

  return <h1>Olá, {props.name}</h1>;
   
}

const element = <Bemvindo name="Sara"/>;
ReactDOM.render(
  element, 
  document.getElementById('root')
);





