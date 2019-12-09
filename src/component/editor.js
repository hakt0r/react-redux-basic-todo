
import React from 'react'
import { connect } from 'react-redux'
import { InputGroup, FormControl, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faPlus, faUndo } from '@fortawesome/free-solid-svg-icons'

class Editor extends React.Component {
  constructor(props){
    super(props);

    this.textInput = null;

    this.setTextInputRef = element => {
      this.textInput = element;
    };
  }

  componentDidMount(){
    if (this.textInput) this.textInput.focus();
  }

  componentDidUpdate(){
    if ( this.textInput && this.props.editIndex !== -1 ) this.textInput.focus();
  }

  add   = (e)=>{ this.props.dispatch({ type:"ADD"   })}
  save  = (e)=>{ this.props.dispatch({ type:"SAVE"  })}
  abort = (e)=>{ this.props.dispatch({ type:"ABORT" })}

  change = (e)=>{ this.props.dispatch({
    type:"INPUT", value:e.target.value
  })}

  render(){
    let { editIndex, inputValue, inputLegal } = this.props;
    let buttonTitle, buttonAction;

    if ( editIndex === -1 ) {
      buttonTitle = <FontAwesomeIcon icon={faPlus} />
      buttonAction = this.add
    }
    else {
      buttonTitle = <FontAwesomeIcon icon={faFile} />
      buttonAction = this.save
    }

    const keyAction = e => {
      if ( inputLegal && e.key === "Enter" ) buttonAction(e);
    }

    return (
      <InputGroup className="mb-3">
        <FormControl
          onKeyPress={keyAction}
          onChange={this.change}
          value={inputValue}
          placeholder="Todo Description"
          aria-label="Todo Description"
          aria-describedby="basic-addon2"
          ref={this.setTextInputRef}
          />
        <InputGroup.Append>
          { editIndex === -1 ? null :
            <Button
              onClick={this.abort}
              value={inputValue}
              variant="danger">
              <FontAwesomeIcon icon={faUndo} />
            </Button> }
          <Button
            disabled={!inputLegal}
            onClick={buttonAction}
            value={inputValue}
            variant="success">
            {buttonTitle}
          </Button>
        </InputGroup.Append>
    </InputGroup> )
}}

export default connect( state => { return state } )(Editor)
