
import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faPen, faUndo, faFlag } from '@fortawesome/free-solid-svg-icons'

function Item({item,index,editIndex,modifyTodoItem,dispatch}){
  let { text, status } = item
  let isBeingEdited = index === editIndex ? 'editing' : null;
  return (
    <tr className={isBeingEdited}>
      <td>{index}</td>
      <td>{text}</td>
      <td>{ status === 'done'
            ? <FontAwesomeIcon icon={faCheck} />
            : <FontAwesomeIcon icon={faFlag} />
           }
      </td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          { status === 'done'
            ? <Button variant="warning" onClick={modifyTodoItem("UNDO",index)}>
                <FontAwesomeIcon icon={faUndo} />
              </Button>
            : <Button variant="success" onClick={modifyTodoItem("DONE",index)}>
                <FontAwesomeIcon icon={faCheck} />
              </Button>
          }
          <Button variant="warning" onClick={modifyTodoItem("EDIT",index)}>
            <FontAwesomeIcon icon={faPen} />
          </Button>
          <Button variant="danger" onClick={modifyTodoItem("DEL", index)}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </div>
      </td>
    </tr> )
}

export default connect(
  state => { return state },
  (dispatch)=>{
    return {
      modifyTodoItem: (type,index)=>{
        return (e)=>{
          dispatch({ type:type, index:index })
    }}}}
)(Item)
