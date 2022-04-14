import React from "react";
import ReactDOM from 'react-dom';

//Composição VS 
//Herança
//Contenção

export default function AppEspecializacao(){
    function FancyBorder(props) {
        return (
          <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
          </div>
        );
    }
      
    function Dialog(props) {
        return (
          <FancyBorder color="blue">
            <h1 className="Dialog-title">
              {props.title}
            </h1>
            <p className="Dialog-message">
              {props.message}
            </p>
            {props.children}
          </FancyBorder>
        );
    }
    
    class SingUpDialog extends React.Component{
        constructor(props){
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.handleSingUp = this.handleSingUp.bind(this);
            this.state = {login: ''};
        }

        render(){
            return(
              <Dialog title="Programa de Exploração de Marte"
                      message="Como devemos nos referir a você?">
                <input value={this.state.login}
                       onChange={this.handleChange} />
                <button onClick={this.handleSingUp}>
                Inscreva-se!
                </button>              
              </Dialog>  
            );
        }

        handleChange(e){
            this.setState({login: e.target.value});
        }

        handleSingUp(){
            alert(`Bem vindo a bordo, ${this.state.login}!`);
        }
    }

    ReactDOM.render(
      <SingUpDialog />,
      document.getElementById('root')  
    );
}