
let data = localStorage.getItem('todoState');
    data = data ? JSON.parse(data) : {};

const defaultState = {
  editIndex:-1,
  inputValue:"",
  todo:[],

  ...data
}

if ( defaultState.inputValue.trim() === '' )
  defaultState.inputLegal = false;

const reducer = ( state=defaultState, action ) => {

  let result, todoList, {type} = action;

  switch (type){

    case "INPUT":
      let legalInput = action.value.trim() !== ''

      result = {
        ...state,
        inputLegal: legalInput,
        inputValue: action.value
      };
      break;

    case "EDIT":
      result = {
        ...state,
        inputValue: state.todo[action.index].text,
        editIndex:  action.index
      };
      break;

    case "SAVE":
      if ( state.inputValue.trim() === '' ){
        result = state;
        break;
      }

      todoList = [...state.todo];

      todoList[state.editIndex] = {
        ...todoList[state.editIndex],
        text: state.inputValue
      };

      result = {
        ...state,
        todo:       todoList,
        inputValue: "",
        inputLegal: false,
        editIndex:  -1
      };
      break;

    case "ABORT":
      result = {
        ...state,
        inputValue: "",
        inputLegal: false,
        editIndex:  -1
      };
      break;

    case "DEL":
      todoList = [...state.todo];
      todoList.splice(action.index,1);
      result = {
        ...state,
        todo: todoList
      };
      break;

    case "ADD":
      if ( state.inputValue.trim() === '' ){
        result = state;
        break;
      }
      todoList = state.todo.slice();
      todoList.push({
        text:   state.inputValue,
        status: 'todo'
      });
      result = {
        ...state,
        todo:       todoList,
        inputValue: "",
        inputLegal: false
      };
      break;

      case "DONE":
        todoList = [...state.todo];

        todoList[action.index] = {
          ...todoList[action.index],
          status: 'done'
        };

        result = {
          ...state,
          todo: todoList
        };
        break;

      case "UNDO":
        todoList = [...state.todo];

        todoList[action.index] = {
          ...todoList[action.index],
          status: 'todo'
        };

      result = {
        ...state,
        todo: todoList
      };
      break;

    default:
      result = state;
      break;
  }

  localStorage.setItem( 'todoState', JSON.stringify(result) );

  return result;
}

export default reducer
