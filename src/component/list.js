
import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import Item from './item'

function List(props){
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Todo</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
      { props.todo.map( (item,index)=>{
          return <Item item={item} index={index}/>
      })}
      </tbody>
    </Table>
  )
}

export default connect( state=>{ return state } )(List)
