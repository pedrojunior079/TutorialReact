import React from "react";
import ReactDOM from "react-dom";

export function ComponentesErros(){
    class ErrorBoundary extends React.Component {
        constructor(props) {
          super(props);
          this.state = { error: null, errorInfo: null };
        }
        
        componentDidCatch(error, errorInfo) {
          // Catch erros em qualquer componente abaixo e renderize novamente com mensagem de erro
          this.setState({
            error: error,
            errorInfo: errorInfo
          })
          // Você também pode registrar mensagens de erro em um serviço de relatório de erros aqui
        }
        
        render() {
          if (this.state.errorInfo) {
            // Erro path
            return (
              <div>
                <h2>Algo deu errado.</h2>
                <details style={{ whiteSpace: 'pre-wrap' }}>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </details>
              </div>
            );
          }
          // Normally, just render children
          return this.props.children;
        }  
      }
      
      class BuggyCounter extends React.Component {
        constructor(props) {
          super(props);
          this.state = { counter: 0 };
          this.handleClick = this.handleClick.bind(this);
        }
        
        handleClick() {
          this.setState(({counter}) => ({
            counter: counter + 1
          }));
        }
        
        render() {
          if (this.state.counter === 5) {
            // Simular um erro de JS
            throw new Error('I crashed!');
          }
          return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
        }
      }
      
      function App() {
        return (
          <div>
            <p>
              <b>
                Este é um exemplo de limites de erro em React 16.
                <br /><br />
                Clique nos números para aumentar os contadores.
                <br />
                O contador é programado para lançar quando atinge 5. Isso simula um erro de JavaScript em um componente.
              </b>
            </p>
            <hr />
            <ErrorBoundary>
              <p>Esses dois contadores estão dentro do mesmo limite de erro. Se um falhar, o limite de erro substituirá os dois.</p>
              <BuggyCounter />
              <BuggyCounter />
            </ErrorBoundary>
            <hr />
            <p>Esses dois contadores estão cada um dentro de seu próprio limite de erro. Então, se um falhar, o outro não é afetado.</p>
            <ErrorBoundary><BuggyCounter /></ErrorBoundary>
            <ErrorBoundary><BuggyCounter /></ErrorBoundary>
          </div>
        );
      }
      
      
      
      ReactDOM.render(
        <App />,
        document.getElementById('root')
      );
}