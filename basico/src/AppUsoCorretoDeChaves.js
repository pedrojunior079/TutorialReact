import React from "react";
import ReactDOM from 'react-dom';

export default function AppUsoCorretoDeChaves(){
    function ListaItem(props) {
        // Correto! Não há necessidade de definir a chave aqui:
        return <li>{props.value}</li>;
      }
      
      function NumeroLista(props) {
        const numeros = props.numeros;
        const listaItems = numeros.map((numero) =>
          // Correto! A chave deve ser definida dentro do array.
          <ListaItem key={numero.toString()} value={numero} />
        );
        return (
          <ul>
            {listaItems}
          </ul>
        );
      }
      
      const numeros = [1, 2, 3, 4, 5];
      ReactDOM.render(
        <NumeroLista numeros={numeros} />,
        document.getElementById('root')
      );
} 