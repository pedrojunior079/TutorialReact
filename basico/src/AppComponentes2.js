import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date) {
  return date.toLocaleDateString();
}

export default function Comment(props){
  return(
    <div className="Comment">
       <div className="UserInfo">
         <img className="Avatar"
            src={props.author.avaterUrl}
            alt={props.author.name}
         />
         <div className="UserInfo-name">
           {props.author.name}
         </div>
       </div>
       <div className="Comment-text">
         {props.text}
       </div>
       <div className="Comment-date">
         {formatDate(props.date)}
       </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'Espero que goste de aprender React!',
  author: {
    name: 'Olá Gatinho',
    avatarUrl: 'http://placekitten.com/50/50'
  }
};


ReactDOM.render(
  <Comment
   date={comment.date}
   text={comment.text}
   author={comment.author} />, 
  document.getElementById('root')
);





