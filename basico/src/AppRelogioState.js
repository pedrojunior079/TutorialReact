import React from 'react';
import ReactDOM from 'react-dom';




export default function Clock(props){
    return(
      <div>
        <h1>Olá, mundo</h1>
        <h2>Agora são {props.date.toLocaleTimeString()}.</h2>
      </div>
    );  
  }

  function tick(){
      ReactDOM.render(<Clock date={new Date()}/>, 
      document.getElementById('root')
    ); 
  }

  

setInterval(tick, 1000);



