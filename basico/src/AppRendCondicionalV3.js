//Renderização Condicional V3
import React from 'react';
import ReactDOM from 'react-dom';


export default function AvisoBanner(props){
    if(!props.warn){
        return null;
    }

    return(
        <div className="aviso">
           Aviso!
        </div>
    );
}

class Rage extends React.Component{
    constructor(props){
        super(props);
        this.state = {showAviso: true}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState(state => ({
            showAviso: !state.showAviso
        }));
    }

    render(){
        return(
            <div>
                <AvisoBanner warn={this.state.showAviso} />
                <button onClick={this.handleToggleClick}>
                  {this.state.showAviso ? 'Esconder' : 'Mostrar'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Rage />,
    document.getElementById('root')
);

