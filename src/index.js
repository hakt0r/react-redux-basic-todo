import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

let defaultState = {
  editIndex:-1,
  inputValue:"",
  todo:[
    {text:'asd',status:'ok'}
  ]
}

let reducer = (state=defaultState,action)=>{
  let {type} = action
  let newTodoList
  switch (type){

    case "UPDATE_INPUT":
      return {...state,inputValue:action.value}

    case "EDIT":
      return {...state,editIndex:action.index}

    case "SAVE":
      newTodoList = [...state.todo]
      newTodoList[action.index].text = action.value
      return {...state,editIndex:-1}

    case "DEL":
      newTodoList = [...state.todo]
      newTodoList.splice(action.index,1)
      return {...state,todo:newTodoList};

    case "ADD":
      newTodoList = state.todo.slice()
      newTodoList.push({
        text: action.value,
        status: 'todo'
      })
      return {...state,todo:newTodoList};
    default: return state;
  }
}

let store = createStore( reducer )

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
