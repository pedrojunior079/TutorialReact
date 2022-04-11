import React from 'react';
import ReactDOM from 'react-dom';



export default function Bemvindo(props){

  return <h1>Olá, {props.name}</h1>;
   
}

function App(){
  return(
    <div>
       <Bemvindo name="Mateus" />
       <Bemvindo name="Marcos" />
       <Bemvindo name="Lucas" />
    </div>
  );
}


ReactDOM.render(
  <App/>, 
  document.getElementById('root')
);





