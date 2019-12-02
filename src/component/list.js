
import React from 'react'
import { connect } from 'react-redux'
import Item from './item'

function List(props){
  return props.todo.map( (item,index)=>{
    return <Item item={item} index={index}/>
  })
}

export default connect( state=>{ return state } )(List)
