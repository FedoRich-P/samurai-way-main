import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";

ReactDOM.render(
    <App appState={state}/>,
  document.getElementById('root')
);

// posts={state.postsArr} messages={state.messages} users={state.users}



// const postsArr= [
//     {id: 1, text: 'First comment', likes: 25},
//     {id: 2, text: 'Second  comment', likes: 17},
//     {id: 3, text: 'Third comment', likes: 5},
//     {id: 4, text: 'Fourth  comment', likes: 125},
// ]
//
// const users = [
//     {name: 'Alex', id: 1},
//     {name: 'Nik', id: 2},
//     {name: 'Helen', id: 3},
//     {name: 'Rose', id: 4},
//     {name: 'Vik', id: 5},
//     {name: 'Max', id: 6},
// ]
//
// const messages = [
//     {text: 'Hi !', id: 1},
//     {text: 'How are you ?', id: 2},
//     {text: 'I`m fine )', id: 3},
//     {text: 'Good bay', id: 4},
//     {text: 'How are you ?', id: 5},
//     {text: 'You are ...  )', id: 6},
// ]

