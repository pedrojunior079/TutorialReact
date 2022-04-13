//Renderização Condicional 
//Operador Logico If-Else

import React from 'react';
import ReactDOM from 'react-dom';

export default function AppCondOperadorLogico(){
    function Mailbox(props){
        const unreadMessages = props.unreadMessages;
        return(
           <div>
               <h1>Ola!</h1>
               {unreadMessages.length > 0 &&
                 <h2>
                 Você tem {unreadMessages.length} Mensagens não lidas
                 </h2>
               }
           </div> 
        );
    }

    const messages = ['React', 'Re: react', 'Re:Re: React'];
    ReactDOM.render(
       <Mailbox unreadMessages={messages} />,
       document.getElementById('root') 
    ); 
}