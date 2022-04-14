import React from "react";
import ReactDOM from 'react-dom';

//Manipulando Múltiplos Inputs 
//dentro de form

export default function AppMultiplosInputs(){
    class Reservation extends React.Component{
        constructor(props){
          super(props);
            this.state = {
                estaIndo: true,
                numeroDeConvidados: 2
          };

          this.handleInputChange =  this.handleInputChange.bind(this);
        }

        handleInputChange(event){
          const target = event.taget;
          const value = target.type === 'checkbox' ? target.checked : target.value;
          const name =  target.name;
          
          this.setState({
              [name]: value
          });
        }

        render(){
            return(
              <form>
                  <label>
                      Estão indo:
                      <input 
                         name="estaIndo"
                         type="checkbox"
                         checked={this.state.estaIndo}
                         onChange={this.handleInputChange} /> 
                  </label>
                  <br/>
                  <label>
                      Número de convidados:
                      <input
                         name="numeroDeConvidados"
                         type="number"
                         value={this.state.numeroDeConvidados}
                         onChange={this.handleInputChange} />
                  </label>
              </form>  
            );
        }
    }
    
    ReactDOM.render(
       <Reservation />,
       document.getElementById('root') 
    );
}