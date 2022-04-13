import React from 'react';
import ReactDOM from 'react-dom';




export default class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }
  
  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  render(){
    return(
      <div>
         <h1>Bem-vindo ao Tutorial de React</h1>
         <h2>Usando setState para agendar atualizações para o estado local do componente</h2>
         <h2>Agora são {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />, 
  document.getElementById('root')
); 
 


