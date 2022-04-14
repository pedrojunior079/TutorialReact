import React from "react";
import ReactDOM from 'react-dom';

//Composição VS 
//Herança
//Contenção

export default function AppContencaoV1(){
   function FancyBorder(props){
     return(
       <div className={'FancyBorder FancyBorder-' +props.color}>
          {props.children}
       </div>  
     );  
   }

   function Dialog(props){
     return(
       <FancyBorder color="blue">
         <h1 className="Dialog-title">
           {props.title}
         </h1>
         <p className="Dialog-message">
           {props.message}
         </p>
       </FancyBorder>
     );
   }

   function BemvindoDialog(){
       return(
         <Dialog
            title="Bem-vindo"
            message="Obrigado por visitar a nossa espaçonave!" />  
       );
   }

   ReactDOM.render(
     <BemvindoDialog />,
     document.getElementById('root')  
   );
}