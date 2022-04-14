import React from "react";
import ReactDOM from 'react-dom';

//Manipulando Múltiplos Inputs 
//dentro de form

export default function AppElevandoTemperatura(){
    const scaleNomes = {
        c: 'Celsius',
        f: 'Fahrenheit'
    };

    function toCelsius(fahrenheit){
        return(fahrenheit - 32) * 5 / 9; 
    }

    function toFahrenheit(celsius){
        return(celsius * 9 / 5) + 32;
    }

    function tryConvert(temperatura, convert){
        const input = parseFloat(temperatura);
        if(Number.isNaN(input)){
            return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    function VeredictoEmEbulicao(props){
        if(props.celsius >= 100){
            return <p>A água ira ferver</p>
        }
        return <p>A água não ira ferver.</p>
    }

    class TemperaturaInput extends React.Component{
        constructor(props){
          super(props);
          this.handleChange = this.handleChange.bind(this);
        }

        handleChange(e){
            this.props.onTemperatureChange(e.target.value);
        }

        render(){
          const temperatura = this.props.temperatura;
          const scale = this.props.scale;
          return(
            <fieldset>
                <legend>Insira a temperatura em {scaleNomes[scale]}:</legend>
                <input value={temperatura}
                       onChange={this.handleChange} />
            </fieldset>  
          );
        }
    }
    
    class Calculadora extends React.Component{
        constructor(props){
            super(props);
            this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
            this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
            this.state = {temperatura: '', scale: 'c'};
        }

        handleCelsiusChange(temperatura){
            this.setState({scale: 'c', temperatura});
        }

        handleFahrenheitChange(temperatura){
            this.setState({scale: 'f', temperatura});
        }

        render(){
            const scale = this.props.scale;
            const temperatura = this.state.temperatura;
            const celsius = scale == 'f' ? tryConvert(temperatura, toCelsius) : temperatura;
            const fahrenheit = scale === 'c' ? tryConvert(temperatura, toFahrenheit) : temperatura;
            return(
              <div>
                  <TemperaturaInput
                    scale="c"
                    temperatura={celsius}
                    onTemperatureChange={this.handleCelsiusChange} />
                  <TemperaturaInput
                    scale="f"
                    temperatura={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange} />
                  <VeredictoEmEbulicao
                    celsius={parseFloat(celsius)} />    
              </div>  
            );
        }
    }

    ReactDOM.render(
      <Calculadora />,
      document.getElementById('root')  
    );
}
