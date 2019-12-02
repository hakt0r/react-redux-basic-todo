
import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

function Item({item,index,dispatch}){
  let { text, status } = item
  const clickDone   = ()=> { dispatch({type:"DONE", index:index }) }
  const clickUndo   = ()=> { dispatch({type:"UNDO", index:index }) }
  const clickDelete = ()=> { dispatch({type:"DEL",  index:index }) }
  const clickEdit   = ()=> { dispatch({type:"EDIT", index:index }) }
  return (
    <tr>
      <td>{index}</td>
      <td>{text}</td>
      <td xs={1}>{status}</td>
      <td>
        <div class="btn-group" role="group" aria-label="Basic example">
          { status === 'done'
            ? <Button variant="warning" onClick={clickUndo}>Undo</Button>
            : <Button variant="success" onClick={clickDone}>Done</Button>
          }
          <Button variant="warning" onClick={clickEdit}>Edit</Button>
          <Button variant="danger" onClick={clickDelete}>Delete</Button>
        </div>
      </td>
    </tr> )
}

export default connect()(Item)
