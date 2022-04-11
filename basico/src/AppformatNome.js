import React from 'react';
import ReactDOM from 'react-dom';



export default function formatNome(user){
   
  return user.primeiroNome + ' ' + user.UltimoNome;  
}

const user = {
    primeiroNome: 'Pedro',
    UltimoNome: 'Junior'
};

const element = (
    <div>
        <h1>Ola, {formatNome(user)}!</h1>
    </div>
);

ReactDOM.render(element, 
         document.getElementById('root')
         ); 





