import React from "react";
import ReactDOM from 'react-dom';

export default function AppAdicionarMap(){
    function ListaItem(props) {
        return <li>{props.value}</li>;
      }
      
      function NumeroLista(props) {
        const numeros = props.numeros;
        return (
          <ul>
            {numeros.map((numero) =>
              <ListaItem key={numero.toString()}
                        value={numero} />
            )}
          </ul>
        );
      }
      
      const numeros = [1, 2, 3, 4, 5];
      ReactDOM.render(
        <NumeroLista numeros={numeros} />,
        document.getElementById('root')
      );
}