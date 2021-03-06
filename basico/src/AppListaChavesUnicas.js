import React from "react";
import ReactDOM from 'react-dom';

export default function AppListaChavesUnicas(){
   function Blog(props){
       const sidebar = (
          <ul>
              {props.posts.map((post) =>
                <li key={post.id}>
                  {post.title}
                </li>
              )}
          </ul> 
       );
       const content = props.posts.map((post) =>
          <div key={post.id}>
             <h3>{post.title}</h3>
             <p>{post.content}</p>
          </div>
       );
       return(
           <div>
               {sidebar}
               <hr/>
               {content}
           </div>
       );
   }
   
   const posts = [
       {id: 1, title: 'Olá Mundo', content: 'Bem-vindo ao aprendizado React'}, 
       {id: 2, title: 'Instalação', content: 'Você pode instalar o React do npm'}
   ];
   ReactDOM.render(
      <Blog posts={posts} />,
      document.getElementById('root') 
   );
}