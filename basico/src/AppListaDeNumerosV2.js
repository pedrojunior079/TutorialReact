import React from "react";
import ReactDOM from 'react-dom';

export default function AppListaDeNumeros(){
    function NumeroListas(props){
        const numeros = props.numeros;
        const listaItems = numeros.map((numero)=> 
           <li key={numero.toString()}>
             {numero}
           </li>
        );
        return(
            <ul>{listaItems}</ul>
        );
    }

    const numeros = [1, 2, 3, 4, 5];
    ReactDOM.render(
       <NumeroListas numeros={numeros} />,
        document.getElementById('root')
    );
}