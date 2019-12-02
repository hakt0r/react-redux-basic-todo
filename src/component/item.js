
import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes, faPen, faUndo, faFlag } from '@fortawesome/free-solid-svg-icons'

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
      <td>{ status === 'done'
            ? <FontAwesomeIcon icon={faCheck} />
            : <FontAwesomeIcon icon={faFlag} />
           }
      </td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          { status === 'done'
            ? <Button variant="warning" onClick={clickUndo}>
                <FontAwesomeIcon icon={faUndo} />
              </Button>
            : <Button variant="success" onClick={clickDone}>
                <FontAwesomeIcon icon={faCheck} />
              </Button>
          }
          <Button variant="warning" onClick={clickEdit}>
            <FontAwesomeIcon icon={faPen} />
          </Button>
          <Button variant="danger" onClick={clickDelete}>
            <FontAwesomeIcon icon={faTimes} />
          </Button>
        </div>
      </td>
    </tr> )
}

export default connect()(Item)
