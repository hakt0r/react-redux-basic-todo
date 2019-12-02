import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'


export default function App(props) { return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="50" />
        <Input/>
        <List/>
      </header>
    </div> )}




const mapAllProps = (state)=>{ return state }



function ToDoItemList(props){
  return props.todo.map( (item,index)=>{
    return <Item item={item} index={index}/>
  })
}

let List  = connect( mapAllProps )(ToDoItemList)



function ToDoItem({item,index,dispatch}){
  let {text, state} = item
  const click = ()=> {
    dispatch({type:"DEL",index:index})
  }
  return <div>{index} <b>{text}</b> {state} <button onClick={click}>OK</button></div>
}

let Item = connect()(ToDoItem)



class EditToDoItem extends React.Component {

  add = (e)=>{ this.props.dispatch({
    type:"ADD", value:this.props.inputValue
  })}

  save = (e)=>{ this.props.dispatch({
    type:"SAVE", value:this.props.inputValue
  })}

  change = (e)=>{ this.props.dispatch({
    type:"UPDATE_INPUT", value:e.target.value
  })}

  render(){
    let { editIndex, dispatch, inputValue } = this.props
    if ( editIndex === -1 ) {

      return (
      <div>
        <input onChange={this.change} value={inputValue}/>
        <button onClick={this.add}>Add</button>
      </div> )}
    else {

      return (
      <div>
        <input onChange={this.change} value={inputValue}/>
        <button onClick={this.save}>Save</button>
      </div> )
    }
}}

let Input = connect( mapAllProps )(EditToDoItem)
