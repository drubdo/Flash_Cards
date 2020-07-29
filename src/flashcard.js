import React from 'react';
import './App.css'

function FlashCard(props) {
  return (
    <div className="flashCard">
     <h1> {props.word} </h1>
    </div>
  );
}

export default FlashCard;
