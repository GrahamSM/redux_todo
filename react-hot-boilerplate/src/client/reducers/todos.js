// a reducer takes in two things:

// 1. The action (info about what happened)

// 2. A copy of the current state

const defaultState = {
 todos: null
};

function todo(state={}, action){
  switch(action.type){
    case 'ADD_TODO' :
      return {
        text: action.text,
        index: action.index,
        completed: false
      }
    case 'REMOVE_TODO' :
      if (state.index != action.index){
        return state //If the state's index value (current todo) doesn't equal that of the action payload
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })
      return {}
    default:
      return state
  }
}

function todos(state = defaultState, action){
  switch(action.type){
    case 'ADD_TODO' :
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'REMOVE_TODO' :
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state;
  }
  return state
}


export default todos;
