import React from 'react';
import ReactDOM from 'react-dom';

export default function AppListaDeNumeros(){
    
  const numeros = [1, 2, 3, 4, 5];
  const listaItems = numeros.map((numeros) => 
  <li>{numeros}</li> 
);


ReactDOM.render(
   <ul>{listaItems}</ul>,
   document.getElementById('root') 
);
}




