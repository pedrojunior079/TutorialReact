//Renderização Condicional V2
//Elemento Variavel
import React from 'react';
import ReactDOM from 'react-dom';

export default class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        }else{
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return(
            <div>
                <Saudacao isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

function SaudacaoUsuario(props){
  return <h1>Bem-vindo de volta</h1>
}

function SaudacaoConnvidado(props){
  return <h1>Por favor, inscreva-se</h1>
}

function Saudacao(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
      return <SaudacaoUsuario/>
  }
  return <SaudacaoConnvidado/>
}

function LoginButton(props){
    return(
        <button onClick={props.onClick}>
           Login
        </button>
    );
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}> 
           Logout
        </button>
    );
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
);

