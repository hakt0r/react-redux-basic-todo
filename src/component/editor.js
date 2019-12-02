
import React from 'react'
import { connect } from 'react-redux'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

class Editor extends React.Component {

  add  = (e)=>{ this.props.dispatch({ type:"ADD"  })}
  save = (e)=>{ this.props.dispatch({ type:"SAVE" })}

  change = (e)=>{ this.props.dispatch({
    type:"INPUT", value:e.target.value
  })}

  render(){
    let { editIndex, inputValue } = this.props;
    let buttonTitle, buttonAction;
    if ( editIndex === -1 ) {
      buttonTitle = 'Add'
      buttonAction = this.add
    }
    else {
      buttonTitle = 'Save'
      buttonAction = this.save
    }
    return (
      <InputGroup className="mb-3">
        <FormControl
          onChange={this.change}
          value={inputValue}
          placeholder="Todo Description"
          aria-label="Todo Description"
          aria-describedby="basic-addon2"
          />
        <InputGroup.Append>
          <Button
            onClick={buttonAction}
            value={inputValue}
            variant="success">
            {buttonTitle}
          </Button>
        </InputGroup.Append>
    </InputGroup> )
}}

export default connect( state => { return state } )(Editor)
