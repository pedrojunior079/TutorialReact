//Renderização Condicional
import React from 'react';
import ReactDOM from 'react-dom';

export default function UserGreeting(props){
    return <h1>Bem-vindo de volta</h1>
}

function GuestGreeting(props){
    return <h1>Por favor, inscreva-se.</h1>
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting/>
    }
    return <GuestGreeting/>
}

ReactDOM.render(
    //Tente mudar para isLoggedIn={true}
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
);

