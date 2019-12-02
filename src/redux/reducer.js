
const defaultState = {
  editIndex:-1,
  inputValue:"",
  todo:[
    {text:'asd',status:'ok'}
  ]
}

const reducer = (state=defaultState,action)=>{

  let todoList, {type} = action;

  switch (type){

    case "INPUT":
      return {
        ...state,
        inputValue:action.value}

    case "EDIT":
      return {
        ...state,
        inputValue:state.todo[action.index].text,
        editIndex:action.index }

    case "SAVE":
      todoList = [...state.todo]

      let newItem = {
        ...todoList[state.editIndex],
        text:state.inputValue
      }

      todoList[state.editIndex] = newItem

      return {
        ...state,
        todo:todoList,
        inputValue:"",
        editIndex:-1
      };

    case "DEL":
      todoList = [...state.todo]
      todoList.splice(action.index,1)
      return {
        ...state,
        todo:todoList
      };

    case "ADD":
      todoList = state.todo.slice()
      todoList.push({
        text: state.inputValue,
        status: 'todo'
      });
      return {...state,todo:todoList};

    default: return state;
  }
}

export default reducer
