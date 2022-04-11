import React from 'react';
import ReactDOM from 'react-dom';



export default function AppRelogio(){
  const element = (
    <div>
        <h1>Ola, mundo</h1>
        <h2>Agora são {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root')); 
}

setInterval(AppRelogio, 1000);



