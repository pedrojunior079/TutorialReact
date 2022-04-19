import React, { useState } from "react";
import ReactDOM from "react-dom";

export default function ContadorStateHook(){
  function Exemplo(){
    //Declara uma nova variável de state, que chamaremos de "contador"
    const [contador, setContador] = useState(0);
    return(
      <div>
          <p>Voce clicou {contador} vezes</p>
          <button onClick={() => setContador(contador + 1)}>
            Clique aqui
          </button>
      </div>  
    ); 
  }
  ReactDOM.render(
    <Exemplo/>,
    document.getElementById('root') 
  );
  
}