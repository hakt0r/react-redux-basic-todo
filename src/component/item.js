
import React from 'react'
import { connect } from 'react-redux'

function Item({item,index,dispatch}){
  let { text, state } = item
  const clickOK   = ()=> { dispatch({type:"DEL",index:index}) }
  const clickEdit = ()=> { dispatch({type:"EDIT",index:index}) }
  return (
    <div>{index} <b>{text}</b> {state}
      <button onClick={clickEdit}>Edit</button>
      <button onClick={clickOK}>Delete</button>
    </div> )
}

export default connect()(Item)
