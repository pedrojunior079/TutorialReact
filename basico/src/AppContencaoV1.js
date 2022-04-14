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

   function BemvindoDialog(){
       return(
         <FancyBorder color="blue">
             <h1 className="Dialog-title">
               Bemvindo
             </h1>
             <p className="Dialog-message">
               Obrigado por visitar nossa nave espacial
             </p>
         </FancyBorder>  
       );
   }

   ReactDOM.render(
     <BemvindoDialog />,
     document.getElementById('root')  
   );
}