import React from "react";
import ReactDOM from 'react-dom';

//Tag select dentro de form

export default function AppControllerText(){
    class SaborForm extends React.Component{
        constructor(props){
          super(props);
          this.state = {value: 'coco'};
    
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this); 
        }

        handleChange(event){
            this.setState({value: event.target.value});
        }

        handleSubmit(event){
            alert('Seu sabor favorito é : ' + this.state.value);
            event.preventDefault();
        }
        
        render(){
            return(
               <form onSubmit={this.handleSubmit}>
                  <label>
                     Escolha seu sabor favorito:
                      <select value={this.state.value} onChange={this.handleChange}>
                        <option value="laranja">Laranja</option>
                        <option value="limao">Limão</option>
                        <option value="manga">Manga</option>
                        <option value="abacaxi">Abacaxi</option>
                        <option value="mamao">Mamão</option>
                        <option value="melancia">Melancia</option>
                        <option value="morango">Morango</option>
                      </select>
                  </label>
                  <input type="submit" value="Enviar" />
               </form> 
            );
        }
    }

    ReactDOM.render(
      <SaborForm />, 
      document.getElementById('root')
    );
}