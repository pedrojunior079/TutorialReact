import React from "react";
import ReactDOM from "react-dom";

//Efeitos Sem Limpeza
//Exemplo Usando Classes

export default function ContadorHookClasses(){
  class Exemplo extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        contador: 0
      };
    }

    componentDidMount(){
      document.title = `Voce clicou ${this.state.contador} vezes`;
    }
       
    componentDidUpdate(){
      document.title = `Voce clicou ${this.state.contador} vezes`;
    }
    
    render(){
      return(
        <div>
          <p>Voce clicou {this.state.contador}</p>
          <button onClick={() => this.setState({contador: this.state.contador + 1})}>
            Clique em mim
          </button>
        </div>
      );
    }
     
  }
  ReactDOM.render(
    <Exemplo/>,
    document.getElementById('root') 
  );
  
}