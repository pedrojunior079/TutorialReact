import React from "react";
import ReactDOM from 'react-dom';

//Manipulando Múltiplos Inputs 
//dentro de form

export default function AppCalcTemperatura(){
    function VeredictoEmEbulicao(props){
        if(props.celsius >= 100){
            return <p>A água iria ferver</p>
        }
        return <p>A água não iria ferver.</p>
    }
    
    class Calculadora extends React.Component{
        constructor(props){
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.state = {temperatura: ''};
        }

        handleChange(e){
            this.setState({temperatura: e.target.value});
        }

        render(){
            const temperatura = this.state.temperatura;
            return(
              <fieldset>
                  <legend>Insira a temperatura em Celsius</legend>
                  <input
                      value={temperatura}
                      onChange={this.handleChange} />
                    <VeredictoEmEbulicao
                        celsius={parseFloat(temperatura)} />
              </fieldset>  
            );
        }
    }

    ReactDOM.render(
      <Calculadora />,
      document.getElementById('root')  
    );
}
