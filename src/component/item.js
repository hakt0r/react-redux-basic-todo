
import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

function Item({item,index,dispatch}){
  let { text, status } = item
  const clickDelete = ()=> { dispatch({type:"DEL", index:index}) }
  const clickEdit   = ()=> { dispatch({type:"EDIT",index:index}) }
  return (
    <tr>
      <td>{index}</td>
      <td>{text}</td>
      <td xs={1}>{status}</td>
      <td>
        <Button variant="warning" onClick={clickEdit}>Edit</Button>
        <Button variant="danger" onClick={clickDelete}>Delete</Button>
      </td>
    </tr> )
}

export default connect()(Item)
