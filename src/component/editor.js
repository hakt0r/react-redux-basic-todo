
import React from 'react'
import { connect } from 'react-redux'

class Editor extends React.Component {

  add  = (e)=>{ this.props.dispatch({ type:"ADD"  })}
  save = (e)=>{ this.props.dispatch({ type:"SAVE" })}

  change = (e)=>{ this.props.dispatch({
    type:"INPUT", value:e.target.value
  })}

  render(){
    let { editIndex, inputValue } = this.props
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

export default connect( state => { return state } )(Editor)
